import React, { useState } from 'react';
import { useInterval } from '../../hooks';
import $ from 'jquery';

import './DialogBox.css';

function DialogBox({ name, children, data, setData }) {
  const skipDictionary = [' ', '.', ',', '!', '?', '"', "'", '`', '~'];
  const [delay, setDelay] = useState(400);
  const [text, setText] = useState('');
  const [isRunning, setisRunning] = useState(true);

  const checkNewDialog = () => {
    if (data === 'next') {
      setData('start');
      setisRunning(true);
      setText('');
    }
  };
  useInterval(() => {
    checkNewDialog();
  }, 50);

  const typing = () => {
    setDelay(400);
    if (children[text.length] !== undefined)
      setText((previousText) => previousText + children[text.length]);
    if (skipDictionary.indexOf(children[text.length]) >= 0) setDelay(10);
    if (text.length >= children.length) {
      setisRunning(false);
    }
  };
  useInterval(
    () => {
      typing();
    },
    isRunning === true ? delay : null
  );

  $('window').on('click', (e) => {
    e.preventDefault();
    isRunning ? setData('skip') : setData('next');
  });

  return (
    <div className='dialogBox-wrapper'>
      <div className='dialogBox-container'>
        {name && <div className='dialogBox-name'>{name}</div>}
        <div className='dialogBox-main'>
          <div className='dialogBox-text'>{text}</div>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
