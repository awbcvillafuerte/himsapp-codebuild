const { app, BrowserWindow, Menu, protocol, ipcMain } = require('electron');
const {autoUpdater} = require("electron-updater");
const path = require("path");
const isDev = require('electron-is-dev')

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
  label: 'HIMS DEV ' + version,
  submenu: [
    {
      label: 'About HIMS ' + version,
      role: 'about'
    },
    {
      label: 'Options',
      submenu: [
        {
          label: 'Open Dev Tools',
          click() {
            mainWindow.openDevTools();
          },
        },
      ],
    },
    {
      label: 'Check for Updates',
      accelerator: 'Command+U',
      click() { autoUpdater.checkForUpdates(); }
    },
    {
      label: 'Quit',
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
          mainWindow.openDevTools();
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
        title: "HIMS DEV"
    });
    mainWindow.setIcon(path.join(__dirname, "../build/hims-dev.png"));

    splash = new BrowserWindow({
        width: 900,
        height: 720,
        title: "HIMS DEV",
    });
    splash.loadURL(splashPath);

    login = new BrowserWindow({
        width: 900,
        height: 720,
        show: false,
        title: "HIMS DEV",
    });

	if (isDev) {
		// Set our above template to the Menu Object if we are in development mode, dont want users having the devtools.
		Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplateDev));
		// If we are developers we might as well open the devtools by default.
		mainWindow.webContents.openDevTools();
	}else{
		Menu.setApplicationMenu(Menu.buildFromTemplate(template));
	}
	
    setTimeout(() => {
        if (isDev) login.loadURL('http://localhost:3000')
        else  login.loadFile('build/index.html');

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
  