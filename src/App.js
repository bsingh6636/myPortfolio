import About from './component/About';
import Education from './component/Education';
import Header from './component/Header';
import PortfolioHeader from './component/PortfolioHeader';

function App() {
  return (
    <div className="App bg-gradient-to-r from-black via-gray-800 to-black px-2 text-white font-mono ">
      <Header/>
      <PortfolioHeader/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;