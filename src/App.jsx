import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import About from './Components/About';
import Skill from './Components/Skill';
import Experience from './Components/Experience';
import Projects from './Components/Project';
import FooterNContact from './Components/FooterNContact';

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <MainPage />
        <About />
        <Skill />
        <Experience />
        <Projects />
        <FooterNContact />
      </div>
    </>
  );
}

export default App;
