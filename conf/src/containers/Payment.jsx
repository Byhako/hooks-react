import React from 'react';
import '../styles/payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <section className="payment-content">
        <h3>Resumen del pedido</h3>
        <div className="payment-button">
          Pago con paypal
        </div>
      </section>
    </div>
  );
}

export default Payment;
