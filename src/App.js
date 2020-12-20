import './styles/main.css';
import NavBar from './components/Header';
import SelectBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Carousel from './components/Carousel';
import { PortProvider } from './store/context';

function App() {
  return (
    <PortProvider>
      <NavBar />
      <SelectBar />
      <About />
      <Carousel />
      <Project />
      <Footer />
    </PortProvider>
  );
}

export default App;
