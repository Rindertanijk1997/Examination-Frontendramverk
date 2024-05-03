import React from 'react';
import './eventTicketCount.css';
import useTicketStore from '../../components/ticketStore'; 

const TicketCounter = ({ event }) => {
  const { ticketCount, increaseTicketCount, decreaseTicketCount } = useTicketStore();

  const totalPrice = event ? event.price * ticketCount : 0;

  return (
    <section className='count-wrapper'>
      <section className='count'>
        <p className='totalPrice'>{totalPrice} SEK</p>
        <section className='antal-biljetter'>
          <button onClick={decreaseTicketCount} className='button'><img src="/assets/minus.png" alt="minus" /></button>
          <p className="number">{ticketCount}</p>
          <button onClick={increaseTicketCount} className='button'><img src="/assets/plus.png" alt="plus" /></button>
        </section>
      </section>
    </section>
  );
};

export default TicketCounter;



