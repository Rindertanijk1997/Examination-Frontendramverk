import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useTicketStore from './path/to/ticketStore';

const Order = () => {
  const location = useLocation();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log('Location state:', location.state); // Lägg till för att se state vid varje render
    if (location.state?.event) {
      setEvent(location.state.event);
    } else {
      console.log('Event data not found on initial render');
    }
  }, [location]);

  if (!event) {
    return <div>Loading event data...</div>;
  }

  return (
    <div>
      <h1 className='event-name'>{event.name}</h1>
      <p className='event-time'>{event.when.formattedDate} kl: {event.when.from} - {event.when.to}</p>
      
    </div>
  );
};

export default Order;

