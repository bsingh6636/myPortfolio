import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import RolePage from './components/RolePage';
import { matchRoleRoute } from './data/roles';

// `path` is passed by the prerender script; in the browser it comes from the URL.
export default function App({ path }) {
  const route = matchRoleRoute(
    path ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  );
  if (route)
    return (
      <ThemeProvider>
        <RolePage {...route} />
      </ThemeProvider>
    );
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </ThemeProvider>
  );
}
