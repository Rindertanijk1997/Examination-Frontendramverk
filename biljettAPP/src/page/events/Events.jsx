import React, { useEffect } from 'react';
import Searchfield from '../../components/Searchfieldt/Searchfield';
import useStore from '../../components/Store';
import './events.css';
import { Link } from 'react-router-dom';

function Events() {
  const { events, loading, error, fetchEvents } = useStore();

  useEffect(() => {
    fetchEvents();
    console.log('Fetching events...');
  }, []);

  return (
    <section className='Events'>
      <h1 className='Events-h1'>Events</h1>
      <Searchfield />
      <section className='events-list'>
        {Array.isArray(events) && events.map(event => {
          return (
            <Link to={`/event/${event.name}`} state={{ events }} key={event.name}>
              <section className="events-card">
                <section className='section-left'>
                  <h3 className='date'>{event.when.formattedDate}</h3>
                </section>
                <section className="section-mitten">
                  <h2 className='events-name'>{event.name}</h2>
                  <p className='events-where'>{event.where}</p>
                  <p className='events-time'>{event.when.from} - {event.when.to}</p>
                </section>
                <section className="section-right">
                  <p className='price'> {event.price} Sek</p>
                </section>
              </section>
            </Link>
          );
        })}
      </section>
    </section>
  );
}

export default Events;


