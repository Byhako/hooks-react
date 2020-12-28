import React from 'react';
import '../styles/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <section className="checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type='button'>&times;</button>
        </div>
      </section>
      <section className="checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type='button'>Continuar</button>
      </section>
    </div>
  );
}

export default Checkout;
