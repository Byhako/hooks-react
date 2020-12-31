import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/payment.css';

const Payment = () => {
  const { state: { cart } } = useContext(AppContext);

  return (
    <div className="payment">
      <section className="payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map(item => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="payment-button">
          <button type='button'>
            Pagar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Payment;
