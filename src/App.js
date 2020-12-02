import './styles/main.css';
// import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { components } from './components';

function App() {
  return (
    <BrowserRouter>
      {components.map((component) => (
        <Route path='/' component={component} key={component} />
      ))}
    </BrowserRouter>
  );
}

export default App;
