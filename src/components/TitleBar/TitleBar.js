import React from 'react';
import { Button } from '../../components';
import { ipcSend } from '../../components';

import './TitleBar.css';

const { ipcRenderer } = window.require('electron');

function ipcSend(message) {
  ipcRenderer.send(message);
}

function TitleBar() {
  return (
    <>
      <div className='titleBar'>
        <Button
          type='btn--title'
          id='btn--exit'
          onClick={ipcSend('closeApp')}
        >
          <i class='fa-solid fa-xmark fa-xs'></i>
        </Button>
        <Button
          type='btn--title'
          id='btn--max'
          onClick={ipcSend('maximizeApp')}
        >
          <i class='fa-regular fa-square fa-2xs'></i>
        </Button>
        <Button
          type='btn--title'
          id='btn--min'
          onClick={ipcSend('minimizeApp')}
        >
          <i class='fa-solid fa-minus fa-2xs'></i>
        </Button>
        <div className='titleString'>심연의 바다</div>
      </div>
      <div className='titleUnderLine'></div>
    </>
  );
}

export default TitleBar;
