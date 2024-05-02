import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MySwiperComponent from './components/MySwiperComponent'; 
import Order from './page/order/Order';
import Tickets from './page/tickets/Tickets';
import HomePage from './page/homePage/HomePage';
import Events from './page/events/Events';
import Event from './page/event/Event';

function App() {
  const [count, setCount] = useState(0);

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
      </div>
    </Router>
  );
}

export default App;
