import React from 'react';
import { Button } from '../../components';

import './TitleBar.css';

function TitleBar() {
  return (
    <>
      <div className='titleBar'>
        <Button type='btn--title' id='btn--exit'>
          <i class='fa-solid fa-xmark fa-xs'></i>
        </Button>
        <Button type='btn--title' id='btn--max'>
          <i class='fa-regular fa-square fa-2xs'></i>
        </Button>
        <Button type='btn--title' id='btn--min'>
          <i class='fa-solid fa-minus fa-2xs'></i>
        </Button>
        <div className='titleString'>심연의 바다</div>
      </div>
      <div className='titleUnderLine'></div>
    </>
  );
}

export default TitleBar;
