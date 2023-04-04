const { app, BrowserWindow, Menu, protocol, ipcMain } = require('electron');
const {autoUpdater} = require("electron-updater");
const path = require("path");
const isDev = require('electron-is-dev');
const electron = require('electron');

let mainWindow;
let isWin = process.platform === "win32";
let splashPath;

const Printer = require('./printer')
const Dialog = require('./dialog')
const PartnerViewer = require('./partnerview')

if (isWin) {
    splashPath = `file://${__dirname}/../build/splash.html`;
} else {
    splashPath = `file://${path.join(__dirname, "../build/splash.html")}`;
}

function updaterLog(text) {
  console.log(text);
}

// make my own menu
let template = []

const name = app.getName();
const version = app.getVersion();
template.unshift({
  label: 'hims-desktop ' + version,
  submenu: [
    {
      label: 'About HIMS ' + version,
      role: 'about'
    },
    {
      label: 'Check for Updates',
      accelerator: 'Command+U',
      click() { autoUpdater.checkForUpdates(); }
    },
    {
      label: 'Options',
      submenu: [
        {
          label: 'Open Dev Tools',
          accelerator: 'CommandOrControl+I',
          click() {
            devtools = new BrowserWindow();
            mainWindow.webContents.setDevToolsWebContents(devtools.webContents);
            mainWindow.loadURL(splashPath);
            mainWindow.webContents.openDevTools({ mode: 'detach' });
          },
        },
      ],
    },
    {
    label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Exit and Update',
      accelerator: 'Command+Q',
      click() { app.quit(); }
    },
  ]
})

// Create simple menu for easy devtools access, and for demo
const menuTemplateDev = [
  {
    label: 'Options',
    submenu: [
      {
        label: 'Open Dev Tools',
        click() {
          mainWindow.webContents.openDevTools();
        },
      },
    ],
  },
];

function createWindow() {
       mainWindow = new BrowserWindow({
        width: 900,
        height: 720,
        show: false,
        title: "HIMS Desktop for UAT",
        webPreferences: {
          devTools: true
        }
    });
    mainWindow.setIcon(path.join(__dirname, "../build/hims-uat.png"));

    splash = new BrowserWindow({
        width: 900,
        height: 720,
        title: "HIMS Desktop for UAT",
        webPreferences: {
          devTools: true
        }
    });
    splash.loadURL(splashPath);

    login = new BrowserWindow({
        width: 900,
        height: 720,
        show: false,
        title: "HIMS Desktop for UAT",
    });
	
	if (!isDev) {
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
	}
	
    setTimeout(() => {
        login.loadFile('build/index.html');

    }, 2000);

    login.once("ready-to-show", () => {
        splash.close();
        login.show();
    });

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
autoUpdater.on('checking-for-update', () => {
    updaterLog('Checking for update...');
});
autoUpdater.on('update-available', (info) => {
    updaterLog('Update available.');
});
autoUpdater.on('update-not-available', (info) => {
    updaterLog('Update not available.');
});
autoUpdater.on('error', (err) => {
    updaterLog('Error in auto-updater. ' + err);
});
autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    updaterLog(log_message);
});
autoUpdater.on('update-downloaded', (info) => {
    updaterLog('Update downloaded');
});  
app.on('ready', function()  {
    autoUpdater.checkForUpdatesAndNotify();
});

Dialog(electron); 
Printer(electron);
PartnerViewer(electron, mainWindow);

app.setAsDefaultProtocolClient('hims-uat');
  
