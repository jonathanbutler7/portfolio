import './styles/main.css';
import { useState } from 'react';
import NavBar from './components/Header';
import SelectBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import SoftSkills from './components/SoftSkills';
import Projects from './components/Projects';
import Context from './store/context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const value = { isDarkMode, setIsDarkMode }
  return (
    <Context.Provider value={value}>
      <NavBar />
      <SelectBar />
      <About />
      <SoftSkills />
      <Projects />
      <Footer />
    </Context.Provider>
  );
}

export default App;
