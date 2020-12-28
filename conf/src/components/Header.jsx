import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <h2>
        <Link to='/'>
          Platzi Conf Merch
        </Link>
      </h2>
      <div className="header-checkout">
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket' />
        </Link>
      </div>
    </div>
  );
}

export default Header;
