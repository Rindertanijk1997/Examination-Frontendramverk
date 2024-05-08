import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './page/order/Order';
import Tickets from './page/tickets/Tickets';
import HomePage from './page/homePage/HomePage';
import Events from './page/events/Events';
import Event from './page/event/Event';
import SwipeableWrapper from './components/SwipeableWrapper'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SwipeableWrapper><HomePage /></SwipeableWrapper>} />
          <Route path="/events" element={<SwipeableWrapper><Events /></SwipeableWrapper>} />
          <Route path="/event/:eventName" element={<SwipeableWrapper><Event /></SwipeableWrapper>} />
          <Route path="/order" element={<SwipeableWrapper><Order /></SwipeableWrapper>} />
          <Route path="/tickets" element={<SwipeableWrapper><Tickets /></SwipeableWrapper>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
