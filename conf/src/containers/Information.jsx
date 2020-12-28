import React from 'react';
import '../styles/information.css';

const Information = () => {
  return (
    <div className="information">
      <section className="information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="information-form">
          <form action="">
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="text" placeholder='Correo electrónico' name='email' />
            <input type="text" placeholder='Dirección' name='address' />
            <input type="text" placeholder='apto' name='apto' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Pais' name='countri' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Código postal' name='cp' />
            <input type="text" placeholder='Teléfono' name='phone' />
          </form>
        </div>
        <div className="information-buttons">
          <button type='button' className="information-back">
            Regresar
          </button>
          <button type='button' className="information-next">
            Pagar
          </button>
        </div>
      </section>

      <section className="information-sidebar">
        <h3>Pedido:</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Information;
