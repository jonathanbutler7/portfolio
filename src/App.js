import './styles/main.css';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { components } from './store/components';
import Context from './store/context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
        {components.map((component) => (
          <Route path='/' component={component} key={component} className='light-theme' />
        ))}
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
