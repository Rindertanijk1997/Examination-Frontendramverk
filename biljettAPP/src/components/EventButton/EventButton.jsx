import React from 'react';
import './eventbutton.css';
import { useNavigate } from 'react-router-dom';
import useTicketStore from '../../components/ticketStore';

const EventButton = ({ event }) => {
  const navigate = useNavigate();
  const { addToOrder } = useTicketStore();

  const handleAddToOrder = () => {
    addToOrder(event);  // Lägger till eventet till ordern
    navigate('/order'); // Navigerar till order-sidan
  };

  return (
    <button className='eventbutton' onClick={handleAddToOrder}>Lägg i varukorgen</button>
  );
};

export default EventButton;