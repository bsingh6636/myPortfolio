import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);
function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored === 'dark';
  } catch {
    /* Storage is optional. */
  }
  // No saved preference: fall back to the device/OS colour scheme.
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(readStoredTheme);
  // The prerendered HTML is always rendered in light mode. Report the light theme until
  // hydration finishes so the first client render matches the server markup; the page
  // colours themselves are already correct because the inline <head> script sets
  // data-theme before React runs.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#22231f' : '#f6f4ee');
    try {
      window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* Storage is optional. */
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider
      value={{ isDark: hydrated && isDark, toggleTheme: () => setIsDark((value) => !value) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
