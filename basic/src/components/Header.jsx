import React from 'react'
import './styles.css';

const Header = ({ setDarkMode, darkMode }) => {

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="header">
      <h1>ReactHooks</h1>
      <button type='button' onClick={handleClick}>{darkMode ? 'Light' : 'Dark'}</button>
    </div>
  );
}

export default Header;
