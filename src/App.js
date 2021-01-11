import './styles/main.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Carousel from './components/Carousel/Carousel';
import Banner from './components/Banner/Banner';
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
