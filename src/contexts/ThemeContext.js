import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      return window.localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#22231f" : "#f6f4ee");
    try {
      window.localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* Storage is optional. */
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme: () => setIsDark((value) => !value) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
