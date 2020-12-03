import './styles/main.css';
import { useState } from 'react';
import { components } from './store/components';
import Context from './store/context';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      {components.map((component) => component)}
    </Context.Provider>
  );
}

export default App;
