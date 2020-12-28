import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <section className="checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          
          <button type='button'>
            <i className='fas fa-trash-alt' />
          </button>
        </div>
      </section>
      <section className="checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to='/checkout/information'>
          <button type='button'>Continuar</button>
        </Link>
      </section>
    </div>
  );
}

export default Checkout;
