import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/checkout.css';

const Checkout = () => {
  const { state: { cart }, removeToCart } = useContext(AppContext);

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="checkout">
      <section className="checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos</h3>
        ) : (
          <h3>Sin pedidos</h3>
        )}
        {cart.map(item => (
          <div className="checkout-item" key={item.title}>
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>

            <button type='button' onClick={() => removeToCart(item)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
      </section>
      {cart.length > 0 ? (
        <section className="checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar</button>
          </Link>
        </section>
      ) : (
        <section className="checkout-sidebar">
          <h3>Continuar comprando</h3>
          <Link to='/'>
            <button type='button'>Continuar</button>
          </Link>
        </section>
      )}
    </div>
  );
}

export default Checkout;
