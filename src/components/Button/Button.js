import React from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles
const { ipcRenderer } = window.require('electron');

function Button({ children, type, id }) {
  return (
    <div
      className={`btn ${type} ${id}`}
      onClick={() => {
        ipcRenderer.send('closeApp');
      }}
    >
      {children}
    </div>
  );
}

export default Button;
