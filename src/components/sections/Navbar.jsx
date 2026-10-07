import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { profile } from "../../data/profile";
const links = [
  ["Experience", "#experience"],
  ["Work", "#projects"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { isDark, toggleTheme } = useTheme();
  const menuButton = useRef(null);
  const navigation = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event) => {
      if (open && !navigation.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 901px)");
    const resize = (event) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    links.forEach(([, href]) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <nav
        className="container navigation"
        aria-label="Main navigation"
        ref={navigation}
      >
        <a
          href="#home"
          className="wordmark"
          aria-label={`${profile.displayName}, home`}
        >
          bk<span className="wordmark-dot">.</span>
        </a>
        <span className="nav-caption">
          {profile.displayName}
          <span>Engineer · Bengaluru</span>
        </span>
        <div
          id="navigation-links"
          className={`navigation-links ${open ? "is-open" : ""}`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            className="mobile-resume"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume PDF <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="navigation-actions">
          <button
            type="button"
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            {isDark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>
          <a
            className="nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="navigation-links"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
