import React, { useState } from 'react';



const TicketCounter = ({ price }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className='count'>
      <p className='totalPrice'> {price * count} SEK</p>
      <section className='antal-biljetter'>
        <button onClick={decrementCount} className='button'>-</button>
        <span> {count} </span>
        <button onClick={incrementCount} className='button'>+</button>
      </section>
    </section>
  );
};

export default TicketCounter;


