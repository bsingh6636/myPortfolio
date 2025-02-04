
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Header from './component/Header';
import PortfolioHeader from './component/PortfolioHeader';
import Projects from './component/Projects';
import Resume from './component/Resume';
import SkillsSection from './component/smallComponent/SkillsSection';


function App() {
  
  return (
    <div className="App AppBody md:text-xl bg-gradient-to-r from-black via-gray-800 to-black text-white font-mono px-8 sm:px-8 md:px-16 max-md:px-1">
      <Header />
      <section id="portfolio">
        <PortfolioHeader />
      </section>
      <section id="about">
        <About />
      </section>
      <SkillsSection />
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

