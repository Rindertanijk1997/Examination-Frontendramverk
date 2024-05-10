import React from 'react';
import './orderbutton.css';

const OrderButton = ({ onClick }) => {
  return (
    <section className='container'>
    <button className='orderbutton' onClick={onClick}>Visa Biljetter</button>
    </section>
  );
};

export default OrderButton;