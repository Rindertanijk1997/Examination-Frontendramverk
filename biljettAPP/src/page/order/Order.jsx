import React from 'react';
import './order.css';
import useTicketStore from '../../components/ticketStore';
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';
import OrderButton from '../../components/OrderButton/OrderButton';

const Order = () => {
  const { order, tickets } = useTicketStore();

  if (!order.length) {
    return <div>Inga events i varukorgen.</div>;
  }

  // Beräkna totala kostnaden
  const totalCost = order.reduce((acc, event) => {
    const numberOfTickets = tickets[event.id] || 0;
    return acc + (numberOfTickets * event.price);
  }, 0);

  return (
    <section className='order-page'>
      <h1 className='order-page-h1'>Order</h1>
      {order.map((event, index) => (
        <section key={index} className='order-item'>
          <TicketCounter event={event} showOrderDetails={true} />
        </section>
      ))}
      <section>
        <p className='total-price-p'>Totalt värde på order</p>
        <h2 className='total-price'> {totalCost} SEK</h2>
      </section>

      <OrderButton />

    </section>
  );
};

export default Order;