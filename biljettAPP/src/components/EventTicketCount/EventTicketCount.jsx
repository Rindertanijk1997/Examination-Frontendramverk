import React, { useState } from 'react';
import './eventTicketCount.css';

const TicketCounter = ({ event }) => {
  const [count, setCount] = useState(1); 

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const totalPrice = event ? event.price * count : 0;

  return (
    <section className='count-wrapper'>
      <section className='count'>
        <p className='totalPrice'>{totalPrice} SEK</p>
        <section className='antal-biljetter'>
          <button onClick={decrementCount} className='button'><img src="/assets/minus.png" alt="minus" /></button>
          <p className="number">{count}</p>
          <button onClick={incrementCount} className='button'><img src="/assets/plus.png" alt="plus" /></button>
        </section>
      </section>
    </section>
  );
};

export default TicketCounter;



