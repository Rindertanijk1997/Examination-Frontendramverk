import React from 'react';
import './orderbutton.css';
import { useNavigate } from 'react-router-dom';
import useTicketStore from '../../components/ticketStore';

const OrderButton = ({ event }) => {
  const navigate = useNavigate();
  const { addToOrder } = useTicketStore();

  const handleAddToOrder = () => {
    navigate('/tickets'); 
  };

  return (
    <button className='orderbutton' onClick={handleAddToOrder}>Skicka Order</button>
  );
};

export default OrderButton;