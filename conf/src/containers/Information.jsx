import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/information.css';

const Information = () => {
  const { state: { cart }, addToBuyer } = useContext(AppContext);
  const history = useHistory();
  const form = useRef(null);

  const handleSubmit = () => {
    const fromData = new FormData(form.current);
    const buyer = {
      'name': fromData.get('name'),
      'email': fromData.get('email'),
      'address': fromData.get('address'),
      'apto': fromData.get('apto'),
      'city': fromData.get('city'),
      'country': fromData.get('country'),
      'state': fromData.get('state'),
      'cp': fromData.get('cp'),
      'phone': fromData.get('phone')
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="information">
      <section className="information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre completo' name='name' />
            <input type="text" placeholder='Correo electrónico' name='email' />
            <input type="text" placeholder='Dirección' name='address' />
            <input type="text" placeholder='apto' name='apto' />
            <input type="text" placeholder='Ciudad' name='city' />
            <input type="text" placeholder='Pais' name='country' />
            <input type="text" placeholder='Estado' name='state' />
            <input type="text" placeholder='Código postal' name='cp' />
            <input type="text" placeholder='Teléfono' name='phone' />
          </form>
        </div>
        <div className="information-buttons">
          <Link to='/checkout'>
            <button type='button' className="information-back">
              Regresar
            </button>
          </Link>
          <button type='button' className="information-next" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </section>

      <section className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="information-item" key={item.title}>
            <div className="information-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Information;
