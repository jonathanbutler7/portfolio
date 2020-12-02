import './styles/main.css';
// import './App.css'
import NavBar from './NavBar';
import SelectBar from './SelectBar';
import Contact from './Contact';
import About from './About';
import CardContainer from './CardContainer';

function App() {
  return (
    <div>
      <NavBar />
      <SelectBar />
      <About />
      <CardContainer />
      <Contact />
    </div>
  );
}

export default App;
