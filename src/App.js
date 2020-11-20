import { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './components/styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const styleApp = {
    backgroundColor: darkMode ? '#232323' : '#f5f5f5'
  };

  return (
    <div className="app" style={styleApp}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Characters />
    </div>
  );
}

export default App;
