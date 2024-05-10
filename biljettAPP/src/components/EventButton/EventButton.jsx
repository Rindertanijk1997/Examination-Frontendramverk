import React from 'react';
import './eventbutton.css';
import { useNavigate } from 'react-router-dom';
import useTicketStore from '../../components/ticketStore';

const EventButton = ({ event }) => {
  const navigate = useNavigate();
  const { addToOrder } = useTicketStore();

  const handleAddToOrder = () => {
    addToOrder(event);  
    navigate('/order');
  };

  return (
    <section className='container'>
    <button className='eventbutton' onClick={handleAddToOrder}>Lägg i varukorgen</button>
    </section>
  );
};

export default EventButton;