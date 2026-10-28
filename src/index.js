import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const container = document.getElementById('root');

// The production build prerenders <App /> into #root and marks it with
// data-prerendered (scripts/prerender.cjs). Hydrate that markup so React only
// attaches behaviour instead of rebuilding the DOM. Development serves the
// hand-written no-JS fallback from public/index.html, which does not match
// <App />, so it must be replaced with a fresh client render, not hydrated.
if (container.dataset.prerendered === 'true') {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
