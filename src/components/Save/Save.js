import React from 'react';
import fs from 'fs';

function Save() {
  const electronTest = () => {
    const app = electron.app || electron.remote.app;
    const direactoryPath = `${app.getPath('appData')}/electronTest/test`;
    const text = `${direactoryPath}/test.txt`;

    // direactoryPath에 해당하는 폴더가 있는지 확인하고, 없는 경우 생성
    !fs.existsSync(direactoryPath) && fs.mkdirSync(direactoryPath);

    // 동기 쓰기
    fs.writeFileSync(text, 'test');

    // 비동기 쓰기
    fs.writeFile(text, 'test', (err) => {
      if (err) console.err(err);
    });
  };

  return <div></div>;
}

export default Save;
