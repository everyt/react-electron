import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, parrent, type, onClick, link }) {
  return (
    <Link to={link}>
      <div className={`btn ${parrent} ${type}`} onClick={onClick}>
        {children}
      </div>
    </Link>
  );
}

export default Button;
