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

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 720,
        show: false,
        title: "HIMS DEV"
    });
    mainWindow.setIcon(path.join(__dirname, "../build/HIMS-Icon.png"));

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
  