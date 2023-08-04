import React, { useState } from 'react';
import { DialogBox } from '../../components';

import '../../Strings/Prologue.json';

function StoryPage() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState('initial data');
  return (
    <div>
      <DialogBox name={name} data={data} setData={setData}>
        아리가또
      </DialogBox>
    </div>
  );
}

export default StoryPage;
