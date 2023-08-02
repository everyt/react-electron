const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,
  });
  win.webContents.openDevTools();
  win.removeMenu();

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true,
    });
  win.loadURL(startUrl);

  ipcMain.on('minimizeApp', () => {
    win.minimize();
  });
  ipcMain.on('maximizeApp', (event) => {
    event.reply('maximizeAppReply');
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
  ipcMain.on('closeApp', () => {
    win.close();
  });
}
app.whenReady().then(() => {
  createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
