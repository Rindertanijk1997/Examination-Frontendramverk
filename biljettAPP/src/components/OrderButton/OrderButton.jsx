import React from 'react';
import './orderbutton.css';

const OrderButton = ({ onClick }) => {
  return (
    <button className='orderbutton' onClick={onClick}>Visa Biljetter</button>
  );
};

export default OrderButton;