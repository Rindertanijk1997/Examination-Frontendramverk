import React, { useState } from 'react';
import './eventTicketCount.css';
import useTicketStore from '../../components/ticketStore';

const TicketCounter = ({ event, showOrderDetails = false }) => {
  const { tickets, addTickets, removeTickets } = useTicketStore();
  const [errorMessage, setErrorMessage] = useState('');

  const ticketCount = tickets[event.id] || 0;

  const handleAddTickets = (eventId) => {
    if (ticketCount >= 10) {
      setErrorMessage('Max 10 biljetter tillåtna per evenemang.');
    } else {
      addTickets(eventId);
      setErrorMessage('');
    }
  };

  const handleRemoveTickets = (eventId) => {
    removeTickets(eventId);
    setErrorMessage('');
  };

  return (
    <section className='count-wrapper'>
      <section className='count'>
        {showOrderDetails && (
          <section className='count-top'>
            <h1 className='event-name'>{event.name}</h1>
            <p className='event-time'>{event.when.formattedDate} kl: {event.when.from} - {event.when.to}</p>
          </section>
        )}
        {!showOrderDetails && <p className='totalPrice'>{event.price * ticketCount} SEK</p>}
        <section className='antal-biljetter'>
          <button onClick={() => handleRemoveTickets(event.id)} className='button'><img src="/assets/minus.png" alt="minus" /></button>
          <p className="number">{ticketCount}</p>
          <button onClick={() => handleAddTickets(event.id)} className='button'><img src="/assets/plus.png" alt="plus" /></button>
        </section>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>
    </section>
  );
};

export default TicketCounter;




