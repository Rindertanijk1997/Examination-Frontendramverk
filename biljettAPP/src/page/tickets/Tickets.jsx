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
  <div>
    <h2>{event.name}</h2>
    <p>Plats: {event.where}</p>
    <p>Datum: {event.when.date}</p>
    <p>Tid: {event.when.from} - {event.when.to}</p>
    <p>Biljett-ID: {event.ticketID}</p>
    <p>Sektion: {event.section}</p>
    <p>Sittplats: {event.seat}</p>
  </div>
);

function Tickets() {
  const { state } = useLocation();
  const { order, tickets } = state || { order: [], tickets: {} };

  if (!order.length) {
    return <div>Inga biljetter att visa.</div>;
  }

  return (
    <div>
      
      {order.map((event, index) => {
        // Generera biljetter för evenemanget
        const eventTickets = generateTickets(event, tickets[event.id]);

        return (
          <div key={index}>
            {eventTickets.map((ticket, index) => (
              <Ticket key={index} event={ticket} />
            ))}
          
          </div>
        );
      })}
    </div>
  );
}

export default Tickets;
