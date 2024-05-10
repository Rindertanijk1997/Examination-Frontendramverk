import React from 'react';
import './orderbutton.css';

const OrderButton = ({ onClick }) => {
  return (
    <section className='container'>
    <button className='orderbutton' onClick={onClick}>Skicka Order</button>
    </section>
  );
};

export default OrderButton;