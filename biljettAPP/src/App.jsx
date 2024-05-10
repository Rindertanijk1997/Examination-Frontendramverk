import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './page/order/Order';
import Tickets from './page/tickets/Tickets';
import HomePage from './page/homePage/HomePage';
import Events from './page/events/Events';
import Event from './page/event/Event';
import Navbar from './components/Navbar/Navbar'; // Antog att Navbar är i components mappen.

function App() {
  return (
    <Router>
      <div className="app"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventName" element={<Event />} />
          <Route path="/order" element={<Order />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;