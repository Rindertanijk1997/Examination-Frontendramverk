import React from 'react';
import './eventbutton.css';
import { useNavigate } from 'react-router-dom';

const EventButton = ({ event }) => {
  const navigate = useNavigate();

  const handleNavigateToOrder = () => {
    if (event) {
      navigate('/order', { state: { event } });
    } else {
      console.error('Event is null or undefined');
    }
  };

  return (
    <button className='eventbutton' onClick={handleNavigateToOrder}>Lägg i varukorgen</button>
  );
};

export default EventButton;