import { useState, useEffect } from 'react';

const DEFAULT_RESUME_URL = '/resume.pdf';
const BACKEND_RESUME_API = 'https://backend-dev-beige.vercel.app/api/resume';

// Singleton in-memory cache and in-flight promise deduplication
let cachedResumeUrl = null;
let inFlightPromise = null;
const listeners = new Set();

function fetchResumeSingleton() {
  if (cachedResumeUrl) {
    return Promise.resolve(cachedResumeUrl);
  }

  if (inFlightPromise) {
    return inFlightPromise;
  }

  inFlightPromise = (async () => {
    try {
      const response = await fetch(BACKEND_RESUME_API);
      if (response.ok) {
        const data = await response.json();
        if (data && data.resumeLink) {
          cachedResumeUrl = data.resumeLink;
          listeners.forEach((notify) => notify(cachedResumeUrl));
          return cachedResumeUrl;
        }
      }
    } catch (err) {
      // Keep default on network error
    } finally {
      inFlightPromise = null;
    }
    return cachedResumeUrl || DEFAULT_RESUME_URL;
  })();

  return inFlightPromise;
}

export function useResume() {
  const [resumeUrl, setResumeUrl] = useState(cachedResumeUrl || DEFAULT_RESUME_URL);
  const [loading, setLoading] = useState(!cachedResumeUrl);

  useEffect(() => {
    if (cachedResumeUrl) {
      setResumeUrl(cachedResumeUrl);
      setLoading(false);
      return;
    }

    const listener = (url) => {
      setResumeUrl(url);
      setLoading(false);
    };

    listeners.add(listener);

    fetchResumeSingleton().then((url) => {
      setResumeUrl(url);
      setLoading(false);
    });

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return { resumeUrl, loading };
}

export default useResume;
