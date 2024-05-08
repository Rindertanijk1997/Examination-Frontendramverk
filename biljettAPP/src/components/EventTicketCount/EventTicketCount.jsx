import React from 'react';
import './eventTicketCount.css';
import useTicketStore from '../../components/ticketStore';

const TicketCounter = ({ event, showOrderDetails = false }) => {
  const { tickets, addTickets, removeTickets } = useTicketStore();
  const ticketCount = tickets[event.id] || 0;

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
          <button onClick={() => removeTickets(event.id)} className='button'><img src="/assets/minus.png" alt="minus" /></button>
          <p className="number">{ticketCount}</p>
          <button onClick={() => addTickets(event.id)} className='button'><img src="/assets/plus.png" alt="plus" /></button>
        </section>
      
      </section>
    </section>
  );
};

export default TicketCounter;



