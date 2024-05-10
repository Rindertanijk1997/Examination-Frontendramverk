import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/events">Events</Link>
      <Link to="/order">Order</Link>
      <Link to="/tickets">Tickets</Link>
    </div>
  );
}

export default Navbar;