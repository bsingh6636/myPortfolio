import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { matchRoleRoute, pageTitle, resumePath } from '../data/roles';
import { findImages, findVideo, pdfPageUrl, pdfUrl, videoUrls } from '../lib/cloudinary';

const LOADING = 'loading';
const MAX_PAGES = 4;
const isReady = (asset) => Boolean(asset) && asset !== LOADING;

function ResumePages({ resume }) {
  // Load page 1, then the next page each time one loads; stop at the first
  // page Cloudinary says does not exist.
  const [pages, setPages] = useState([1]);
  useEffect(() => setPages([1]), [resume]);
  return (
    <div className="resume-pages">
      {pages.map((page) => (
        <img
          key={page}
          src={pdfPageUrl(resume, page)}
          alt={`Resume, page ${page}`}
          onLoad={() =>
            setPages((list) =>
              page === list[list.length - 1] && page < MAX_PAGES ? [...list, page + 1] : list
            )
          }
          onError={() => setPages((list) => list.filter((item) => item !== page))}
        />
      ))}
    </div>
  );
}

function IntroVideo({ video, photo }) {
  // Wait for the photo lookup too, so the thumbnail doesn't swap after showing.
  if (video === LOADING || (video && photo === LOADING)) return <p>Loading video…</p>;
  if (!video) return <p>Intro video coming soon.</p>;
  const { poster, sources } = videoUrls(video, photo);
  return (
    <video controls preload="none" playsInline poster={poster}>
      {sources.map((src) => (
        <source key={src} src={src} />
      ))}
    </video>
  );
}

// Size the player from the width and height Cloudinary reports, so the box is
// final before anything loads and pressing play doesn't resize it (phone
// recordings are often portrait).
function videoBox(video) {
  if (!isReady(video) || !video.width || !video.height) return undefined;
  return { '--video-ratio': video.width / video.height };
}

export default function RolePage({ role, name, tag, view: initialView }) {
  const [view, setView] = useState(initialView);
  const [resume, setResume] = useState(LOADING);
  const [video, setVideo] = useState(LOADING);
  const [photo, setPhoto] = useState(LOADING);
  const downloadName = `Brijesh_Kushwaha_${[role.slug, name]
    .filter(Boolean)
    .join('_')
    .replace(/-/g, '_')}_resume`;

  useEffect(() => {
    let active = true;
    findImages(tag).then((images) => {
      if (!active) return;
      setResume(images.resume);
      setPhoto(images.photo);
    });
    findVideo(tag).then((item) => active && setVideo(item));
    return () => {
      active = false;
    };
  }, [tag]);

  // Switching between resume and video updates the URL without a reload; the
  // browser back button switches back.
  useEffect(() => {
    const onPopState = () => {
      const route = matchRoleRoute(window.location.pathname);
      if (route) setView(route.view);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  useEffect(() => {
    document.title = pageTitle(role, view);
  }, [role, view]);

  const switchTo = (next) => (event) => {
    event.preventDefault();
    if (next === view) return;
    window.history.pushState(null, '', resumePath(role, name, next));
    setView(next);
  };
  const otherAvailable = view === 'resume' ? isReady(video) : isReady(resume);

  return (
    <main id="main-content" className="role-page">
      <a className="role-home" href="/">
        ← brijeshhq.com
      </a>
      <p className="role-eyebrow">
        {view === 'video' ? 'Intro video' : 'Resume'} · {role.title}
      </p>
      <h1>{profile.displayName}</h1>
      <p className="role-summary">{role.summary}</p>

      {otherAvailable && (
        <nav className="role-tabs" aria-label="Resume or intro video">
          {[
            ['resume', 'Resume'],
            ['video', 'Intro video'],
          ].map(([key, label]) => (
            <a
              key={key}
              href={resumePath(role, name, key)}
              aria-current={view === key ? 'page' : undefined}
              onClick={switchTo(key)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

      {view === 'video' && (
        <div
          className="role-video"
          data-state={video === LOADING ? 'loading' : video ? 'ready' : 'empty'}
          style={videoBox(video)}
        >
          <IntroVideo video={video} photo={photo} />
        </div>
      )}

      {view === 'resume' && resume === LOADING && (
        <p className="role-summary">Loading the resume…</p>
      )}
      {view === 'resume' && resume === null && (
        <p className="role-summary">This resume isn’t available right now.</p>
      )}
      {view === 'resume' && isReady(resume) && <ResumePages resume={resume} />}

      <div className="role-actions">
        {view === 'resume' && isReady(resume) && (
          <>
            <a className="button button-solid" href={pdfUrl(resume, downloadName)}>
              Download PDF
            </a>
            <a
              className="button button-outline"
              href={pdfUrl(resume)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
          </>
        )}
        {view === 'resume' && resume === null && (
          <a className="button button-solid" href={profile.resume}>
            View my general resume
          </a>
        )}
        <a className="button button-outline" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="button button-outline" href="/">
          Full portfolio
        </a>
      </div>

      <footer className="role-footer">
        <span>Bengaluru · Immediate joiner · Open to relocation</span>
        <a href={profile.linkedin} rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href={profile.github} rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
      </footer>
    </main>
  );
}
