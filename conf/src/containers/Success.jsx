import React from 'react';
import '../styles/success.css';

const Success = () => {
  return (
    <div className="success">
      <div className="success-content">
        <h2>Gracias por tu compra</h2>
        <span>El pedido llegara en 3 dias a tu dirección</span>
        <section className="success-map">
          Google maps
        </section>
      </div>
    </div>
  );
}

export default Success;
