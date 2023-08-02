import React from 'react';
import './Button.css';

function Button({ children, parrent, type, onClick }) {
  return (
    <div
      className={`btn ${parrent} ${type}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
