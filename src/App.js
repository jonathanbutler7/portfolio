import './styles/main.css';
import NavBar from './components/Header';
import SelectBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import { DarkModeProvider } from './helpers/context';

function App() {
  return (
    <DarkModeProvider>
      <NavBar />
      <SelectBar />
      <About />
      <Carousel />
      <Projects />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
