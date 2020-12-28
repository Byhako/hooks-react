import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/header.css';

const Header = () => {
  const { state: { cart } } = useContext(AppContext);

  return (
    <div className="header">
      <h2>
        <Link to='/'>
          Platzi Conf Merch
        </Link>
      </h2>
      <div className="header-checkout">
        {cart.length > 0 && (
          <div className="header-alert">{cart.length}</div>
        )}
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket' />
        </Link>
      </div>
    </div>
  );
}

export default Header;
