import './styles/main.css';
import NavBar from './components/Header';
import SelectBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import { PortProvider } from './store/context';

function App() {
  return (
    <PortProvider>
      <NavBar />
      <SelectBar />
      <About />
      <SoftSkills />
      <Projects />
      <Footer />
    </PortProvider>
  );
}

export default App;
