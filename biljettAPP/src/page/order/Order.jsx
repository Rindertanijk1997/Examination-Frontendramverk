import './order.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useTicketStore from '../../components/ticketStore'; 
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';

const Order = () => {
  const location = useLocation();
  const [event, setEvent] = useState(null);
  const { tickets } = useTicketStore(state => state);

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
      {tickets[event.id] && tickets[event.id] > 0 && (
        <TicketCounter event={event} showOrderDetails={true} />
      )}
    </div>
  );
};

export default Order;
