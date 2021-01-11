import './styles/main.css';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import { DarkModeProvider } from './helpers/context';

function App() {
  return (
    <DarkModeProvider>
      <Banner />
      <About />
      <Carousel />
      <Projects />
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
