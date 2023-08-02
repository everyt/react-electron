import React from 'react';
import './Button.css';

function Button({ children, type, id, onClick }) {
  return (
    <div className={`btn ${type} ${id}`} onClick={() => {{onClick}}}>{children}</div>
  );
}

export default Button;
