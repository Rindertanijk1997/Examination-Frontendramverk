import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate, useLocation } from 'react-router-dom';

const SwipeableWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ['/', '/events', '/event/:eventName', '/order', '/tickets']; // Lista över dina rutter

  const currentIndex = routes.findIndex(path => path === location.pathname);
  const lastIndex = routes.length - 1;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < lastIndex) {
        navigate(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(routes[currentIndex - 1]);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return <div {...handlers}>{children}</div>;
};

export default SwipeableWrapper;