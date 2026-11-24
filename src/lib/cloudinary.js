import { cloudinaryCloud } from '../data/roles';

// Needs two Cloudinary settings (Settings > Security): "Resource list" not
// restricted, and "Allow delivery of PDF and ZIP files" on.
const base = `https://res.cloudinary.com/${cloudinaryCloud}`;

// Every asset of a type carrying the tag, newest first ([] when none).
// Cloudinary caches the list for about a minute, so new uploads appear shortly
// after.
async function listTag(type, tag) {
  try {
    const res = await fetch(`${base}/${type}/list/${encodeURIComponent(tag)}.json`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const { resources = [] } = await res.json();
    return resources.sort((a, b) => b.version - a.version);
  } catch {
    return [];
  }
}

// One tag, one lookup per type: the newest PDF is the resume, the newest other
// image is the video thumbnail, and the newest video is the intro video.
export async function findImages(tag) {
  const images = await listTag('image', tag);
  return {
    resume: images.find((item) => item.format === 'pdf') || null,
    photo: images.find((item) => item.format !== 'pdf') || null,
  };
}
export const findVideo = async (tag) => (await listTag('video', tag))[0] || null;

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

// Poster: the uploaded photo, cropped to the video's shape around the face,
// or else the video's first frame (the moment before speaking).
export function videoUrls(item, photo) {
  const path = assetPath(item);
  const shape = item.width && item.height ? `ar_${item.width}:${item.height},` : '';
  return {
    poster: photo
      ? `${base}/image/upload/c_fill,g_auto,${shape}w_1280,f_auto,q_auto/${assetPath(photo)}.jpg`
      : `${base}/video/upload/so_0,q_auto,w_1280,c_limit/${path}.jpg`,
    // Compressed 720p MP4 first. The original is the fallback when Cloudinary
    // cannot transform on the fly (free plan: files over about 40 MB).
    sources: [
      `${base}/video/upload/q_auto,vc_auto,w_1280,c_limit/${path}.mp4`,
      `${base}/video/upload/${path}.${item.format}`,
    ],
  };
}
