import React from 'react';

const PaginationDots = ({ currentIndex, total }) => {
  return (
    <div className="pagination">
      {Array.from({ length: total }, (_, index) => (
        <span key={index} className={index === currentIndex ? 'dot active' : 'dot'}></span>
      ))}
    </div>
  );
};

export default PaginationDots;