// Role links: resume and intro video per role, matched to Cloudinary files by
// tag; see README "Role pages". `tag` is the role's default; `variants` are
// extra names prerendered with their own link previews (unlisted names still
// work, with the homepage preview).
import { profile } from './profile';

export const cloudinaryCloud = 'iaarfexv';

export const roles = [
  {
    slug: 'full-stack',
    tag: 'react-node',
    variants: ['react-node'],
    title: 'Full Stack Engineer',
    summary:
      'Two years at Vedak building React portals and the Node.js, MySQL and AWS services behind them: Zoom recording pipelines, SQS event processing, and third-party integrations.',
  },
  {
    slug: 'ai-engineer',
    tag: 'ai-engineer',
    title: 'AI Engineer · RAG and tool calling',
    summary:
      'A backend engineer who ships AI features. I shipped a Python RAG chatbot used in production at Vedak, with access control before retrieval, and built a multi-workspace RAG assistant with validated tool calling.',
  },
  {
    slug: 'backend',
    tag: 'backend',
    title: 'Backend Engineer · Node.js',
    summary:
      'Two years on a multi-service Node.js and MySQL backend at Vedak: AWS SQS event pipelines, a database-driven job scheduler, recording ingestion to S3, and webhook integrations with retries and idempotency.',
  },
];

// Routes, all under /resume:
//   /resume/<slug>                 resume for the role's default tag
//   /resume/<slug>/<name>          resume for the tag <name>
//   /resume/<slug>[/<name>]/video  intro video for the same tag
const SEGMENT = /^[a-z0-9-]+$/;

export function matchRoleRoute(pathname) {
  const parts = (pathname || '').split('/').filter(Boolean);
  if (parts[0] !== 'resume' || parts.length < 2 || parts.length > 4) return null;
  const role = roles.find((item) => item.slug === parts[1]);
  if (!role) return null;
  const rest = parts.slice(2);
  const view = rest[rest.length - 1] === 'video' ? 'video' : 'resume';
  if (view === 'video') rest.pop();
  if (rest.length > 1 || (rest[0] && !SEGMENT.test(rest[0]))) return null;
  const name = rest[0] || null;
  return { role, name, tag: name || role.tag, view };
}

export const resumePath = (role, name, view) =>
  `/resume/${role.slug}/${name ? `${name}/` : ''}${view === 'video' ? 'video/' : ''}`;

export const pageTitle = (role, view) =>
  `${profile.displayName} · ${role.title} · ${view === 'video' ? 'Intro video' : 'Resume'}`;
