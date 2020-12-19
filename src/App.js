import './styles/main.css';
import NavBar from './components/Header';
import SelectBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Project1 from './components/Project1';
import Carousel from './components/Carousel';
import { PortProvider } from './store/context';

function App() {
  return (
    <PortProvider>
      <NavBar />
      <SelectBar />
      <About />
      <Project1 />
      <Carousel />
      {/* <SoftSkills /> */}
      <Footer />
    </PortProvider>
  );
}

export default App;
