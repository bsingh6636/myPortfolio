import { cloudinaryCloud } from '../data/roles';

// Needs two Cloudinary settings (Settings > Security): "Resource list" not
// restricted, and "Allow delivery of PDF and ZIP files" on.
const base = `https://res.cloudinary.com/${cloudinaryCloud}`;

// Newest asset of a type carrying the tag, or null. Cloudinary caches the
// list for about a minute, so new uploads appear shortly after.
export async function findNewest(type, tag, keep = () => true) {
  try {
    const res = await fetch(`${base}/${type}/list/${encodeURIComponent(tag)}.json`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const { resources = [] } = await res.json();
    return resources.filter(keep).sort((a, b) => b.version - a.version)[0] || null;
  } catch {
    return null;
  }
}

export const findResume = (tag) => findNewest('image', tag, (item) => item.format === 'pdf');
export const findVideo = (tag) => findNewest('video', tag);

function assetPath(item) {
  return `v${item.version}/${item.public_id.split('/').map(encodeURIComponent).join('/')}`;
}

export function pdfUrl(item, downloadName) {
  const flags = downloadName ? `fl_attachment:${downloadName}/` : '';
  return `${base}/image/upload/${flags}${assetPath(item)}.pdf`;
}

// One PDF page as an image (webp/avif where supported). Requesting a page past
// the end returns an error, which is how the page knows when to stop.
export function pdfPageUrl(item, page) {
  return `${base}/image/upload/pg_${page},w_1400,c_limit,f_auto,q_auto/${assetPath(item)}.jpg`;
}

export function videoUrls(item) {
  const path = assetPath(item);
  return {
    poster: `${base}/video/upload/so_1,q_auto,w_1280,c_limit/${path}.jpg`,
    // Compressed 720p MP4 first. The original is the fallback when Cloudinary
    // cannot transform on the fly (free plan: files over about 40 MB).
    sources: [
      `${base}/video/upload/q_auto,vc_auto,w_1280,c_limit/${path}.mp4`,
      `${base}/video/upload/${path}.${item.format}`,
    ],
  };
}
