import React from 'react';
import './order.css';
import useTicketStore from '../../components/ticketStore'; 
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';

const Order = () => {
  const { order, tickets } = useTicketStore(); // Hämtar order och tickets från storen

  if (!order.length) {
    return <div>Inga events i varukorgen.</div>; // Om inga events har lagts till, visa detta meddelande
  }

  return (
    <div className='order-page'>
      <h1>Din Order</h1>
      {order.map((event, index) => (
        <div key={index} className='order-item'>
         
          <TicketCounter event={event} showOrderDetails={true} />
        </div>
      ))}
    </div>
  );
};

export default Order;
