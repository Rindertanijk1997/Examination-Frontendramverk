import React from 'react';
import './order.css';
import useTicketStore from '../../components/ticketStore';
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';
import OrderButton from '../../components/OrderButton/OrderButton';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const { order, tickets, resetOrder } = useTicketStore();

  const handleNavigateToTickets = () => {
    navigate('/tickets', { state: { order, tickets } });
    resetOrder();  // Nollställer ordern när användaren klickar på knappen
  };

  if (!order.length) {
    return <div>Inga events i varukorgen.</div>;
  }

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

      <OrderButton onClick={handleNavigateToTickets} />
    </section>
  );
};

export default Order;