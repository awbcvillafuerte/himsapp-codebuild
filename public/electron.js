const electron = require('electron');
const { app, BrowserWindow, Menu, protocol, ipcMain } = electron;
const session = electron.session
const {autoUpdater} = require("electron-updater");
const path = require("path");
//const isDev = require('electron-is-dev');

const communicator = require('./communicator');
// const wrtc = require('electron-webrtc')()
//const publicIp = require('what-is-my-ip-address')

const Printer = require('./printer')
const Dialog = require('./dialog')
const PartnerViewer = require('./partnerview')

let isDev = true;
let mainWindow;
let isWin = process.platform === "win32";
let splashPath;

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
  label: 'hims-dev ' + version,
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
        title: "HIMS for VNI DEV",
        webPreferences: {
          nodeIntegration: true,
          preload: `${__dirname}/preload.js`,
          // partition: 'persist:himsDb'
        }
    });
    mainWindow.setIcon(path.join(__dirname, "../build/hims-dev.png"));

    splash = new BrowserWindow({
        width: 900,
        height: 720,
        title: "HIMS for VNI DEV",
    });
    splash.loadURL(splashPath);

    login = new BrowserWindow({
        width: 900,
        height: 720,
        show: false,
        title: "HIMS for VNI DEV",
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          // partition: 'persist:himsDb'
        },
    });
	
	if (!isDev) {
		Menu.setApplicationMenu(Menu.buildFromTemplate(template));
	}
	
    setTimeout(() => {
        login.loadFile('build/index.html');

    }, 2000);

    communicator.communicator(electron.ipcMain, mainWindow).register('sync-message')

    login.once("ready-to-show", () => {
        splash.close();
        login.show();
    });

    //session.defaultSession.webRequest.onBeforeSendHeaders(async (details,callback)=>{
    //    let tmpIPV4 = await publicIp.v4().then(tmpip=>{return tmpip})
        
    //    details.requestHeaders['X-Forwarded-For']=details.requestHeaders['X-Forwarded-For']!==undefined ? details.requestHeaders['X-Forwarded-For'] : tmpIPV4
    //    callback({ requestHeaders: details.requestHeaders })
    //})

    mainWindow.on("closed", () => (mainWindow = null));
    login.on("closed", () => {
      if (process.platform !== "darwin") app.quit();
    });
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // if (mainWindow) {
    //   if (mainWindow.isMinimized()) mainWindow.restore()
    //   mainWindow.focus()
    // }
    if (login) {
      if (login.isMinimized()) login.restore()
      login.focus()
    }
  })
    
  app.on("ready", createWindow);
}

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

app.setAsDefaultProtocolClient('veridata');
 
Dialog(electron); 
Printer(electron);
PartnerViewer(electron, mainWindow);
 
