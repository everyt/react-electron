import React from 'react';
import { Button } from '../../components';

import './MainMenu.css';

const { ipcRenderer } = window.require('electron');

function MainMenu() {
  const ipcSend = (channel) => {
    ipcRenderer.send(channel, 'onClick');
  };

  return (
    <div className='mainmenu-container'>
      <h1>심연의 바다</h1>
      <Button parrent='btn--main' type='btn--start' link='start'>
        게임시작
      </Button>
      <Button parrent='btn--main' type='btn--load' link='load'>
        불러오기
      </Button>
      <Button parrent='btn--main' type='btn--setting' link='setting'>
        설정
      </Button>
      <Button
        parrent='btn--main'
        type='btn--quit'
        onClick={() => ipcSend('closeApp')}
      >
        종료
      </Button>
    </div>
  );
}

export default MainMenu;
