import React, { useState } from 'react';
import './event.css';
import { useParams, useLocation } from 'react-router-dom';
import EventButton from '../../components/EventButton/EventButton';
import TicketCounter from '../../components/EventTicketCount/EventTicketCount';
import useTicketStore from './path/to/ticketStore';


const Event = () => {
  const { eventName } = useParams();
  const location = useLocation(); 
  const events = location.state?.events;

  console.log(events);
  if (!events) {
    return <div>Loading...</div>;
  }

  const event = events.find(event => event.name === eventName);

  const [ticketCount, setTicketCount] = useState(0);

  if (!event) {
    return <div>Eventet kunde inte hittas.</div>;
  }

  return (
    <section className='event'>
      <section className='event-top'>
        <h1 className='event-h1'>Event</h1>
        <h3 className='event-p'>You are about to score some tickets to</h3>
      </section>

      <section className='event-info'>
        <h1 className='event-name'>{event.name}</h1>
        <p className='event-time'> {event.when.formattedDate}  kl: {event.when.from} - {event.when.to}</p>
        <p className='event-where'>@ {event.where}</p>
      </section>

      <TicketCounter event={event} setTicketCount={setTicketCount} />


      <EventButton event={event} ticketCount={ticketCount} />

     
   

    </section>
  );
}

export default Event;





