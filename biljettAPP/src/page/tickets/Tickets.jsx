import React from 'react';
import { useLocation } from 'react-router-dom';
import './tickets.css';

// Funktion för att generera slumpade biljett-ID:n
const generateTicketID = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Funktion för att generera slumpade sittplatser med hänsyn till att de ska vara bredvid varandra
const generateSeats = (numSeats, startSeat) => {
  const seats = [];
  let lastSeat = startSeat;

  for (let i = 0; i < numSeats; i++) {
    const seat = lastSeat + 1; // Nästa sittplats bredvid den föregående
    seats.push(seat);
    lastSeat = seat;
  }

  return seats;
};

// Funktion för att generera biljetter för ett evenemang
const generateTickets = (event, numTickets) => {
  const generatedTickets = [];
  const sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // Antalet sektioner
  const startSeat = Math.floor(Math.random() * 100) + 1; // Slumpa startplats för sittplatserna

  for (let i = 0; i < numTickets; i++) {
    // Slumpa sektion för varje biljett
    const section = sections[Math.floor(Math.random() * sections.length)];

    // Generera slumpade sittplatser
    const seats = generateSeats(numTickets, startSeat);

    // Generera biljettID
    const ticketID = generateTicketID(5);

    // Lägg till biljett i listan
    generatedTickets.push({ ...event, ticketID, section, seat: seats[i] });
  }

  return generatedTickets;
};

// Biljettkomponent
const Ticket = ({ event }) => (
  <section className='tickets-info'>
    <section className='tickets-info-name-section'>
      <p className='tickets-info-name-p'>WHAT </p>
      <h1 className='tickets-info-name'> {event.name}</h1>
    </section>

    <section className='tickets-info-where-section'>
      <p className='tickets-info-where-p'>WHERE </p>
      <h3 className='tickets-info-where'> {event.where}</h3>
    </section>

<section className='tickets-info-time-section'>
    <section className='tickets-info-when-section'>
      <p className='tickets-info-time-p'>WHEN </p>
      <h3 className='tickets-info-time'> {event.when.date}</h3>
    </section>

    <section className='tickets-info-from-section'>
      <p className='tickets-info-time-p'>FROM </p>
      <h3 className='tickets-info-time'> {event.when.from}</h3>
    </section>

    <section className='tickets-info-to-section'>
      <p className='tickets-info-time-p'>TO </p>
      <h3 className='tickets-info-time'> {event.when.to}</h3>
    </section>
    </section>

    <section className='tickets-info-seat-section'>
      <p className='tickets-info-seat-p'>INFO </p>
      <h3 className='tickets-info-seat'>SECTION {event.section} SEAT {event.seat}</h3>
    </section>

    <section className='tickets-info-qrcode-section'>
      <img src="./assets/code.png" className='ticket-img' alt="code-img" />
      <h3 className='tickets-info-id'># {event.ticketID}</h3>
    </section>

  </section>
);

function Tickets() {
  const { state } = useLocation();
  const { order, tickets } = state || { order: [], tickets: {} };

  if (!order.length) {
    return <div>Inga biljetter att visa.</div>;
  }

  return (
    <section className='tickets-container'>

      {order.map((event, index) => {
        // Generera biljetter för evenemanget
        const eventTickets = generateTickets(event, tickets[event.id]);

        return (
          <section key={index}>
            {eventTickets.map((ticket, index) => (
              <Ticket key={index} event={ticket} />
            ))}

          </section>
        );
      })}
    </section>
  );
}

export default Tickets;
