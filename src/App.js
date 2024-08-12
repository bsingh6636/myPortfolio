import About from './component/About';
import Education from './component/Education';
import Experience from './component/Experience';
import Header from './component/Header';
import PortfolioHeader from './component/PortfolioHeader';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App bg-gradient-to-r from-black via-gray-800 to-black text-white font-mono px-8 sm:px-8 md:px-16 ">
      <Header/>
      <PortfolioHeader/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
