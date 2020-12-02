import './styles/main.css';
// import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { components } from './components';
import PortfolioContext from './context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <PortfolioContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {components.map((component) => (
          <Route path='/' component={component} key={component} />
        ))}
      </PortfolioContext.Provider>
    </BrowserRouter>
  );
}

export default App;
