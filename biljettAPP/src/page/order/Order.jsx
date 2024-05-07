import React from 'react';
import './order.css';
import useTicketStore from '../../components/ticketStore'; 
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';

const Order = () => {
  const { order, tickets } = useTicketStore(); // Hämtar order och tickets från storen

  if (!order.length) {
    return <div>Inga events i varukorgen.</div>; // Om inga events har lagts till, visa detta meddelande
  }

  // Beräkna totala kostnaden
  const totalCost = order.reduce((acc, event) => {
    const numberOfTickets = tickets[event.id] || 0;
    return acc + (numberOfTickets * event.price);
  }, 0);

  return (
    <section className='order-page'>
      <h1>Din Order</h1>
      {order.map((event, index) => (
        <section key={index} className='order-item'>
          <TicketCounter event={event} showOrderDetails={true} />
        </section>
      ))}
      <section className='total-price'>
        <h2>Total kostnad: {totalCost} SEK</h2>
      </section>
    </section>
  );
};

export default Order;