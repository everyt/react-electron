import React, { useState } from 'react';
import { Button } from '../../components';

import './TitleBar.css';

const { ipcRenderer } = window.require('electron');

function TitleBar() {
  const [icon, setIcon] = useState('fa-regular fa-square fa-xs');

  const ipcSend = (channel) => {
    ipcRenderer.send(channel, 'onClick');
  };

  ipcRenderer.on('maximizeAppReply', () => {
    if (icon === 'fa-regular fa-square fa-xs') {
      setIcon('fa-regular fa-window-restore fa-xs');
    } else {
      setIcon('fa-regular fa-square fa-xs');
    }
  });

  return (
    <>
      <div className='titleBar'>
        <Button
          parrent='btn--title'
          type='btn--exit'
          onClick={() => ipcSend('closeApp')}
        >
          <i className='fa-solid fa-xmark fa-xs'></i>
        </Button>
        <Button
          parrent='btn--title'
          type='btn--max'
          onClick={() => ipcSend('maximizeApp')}
        >
          <i className={icon}></i>
        </Button>
        <Button
          parrent='btn--title'
          type='btn--min'
          onClick={() => ipcSend('minimizeApp')}
        >
          <i className='fa-solid fa-minus fa-2xs'></i>
        </Button>
        <div className='titleString'>심연의 바다</div>
      </div>
      <div className='titleUnderLine'></div>
    </>
  );
}

export default TitleBar;
