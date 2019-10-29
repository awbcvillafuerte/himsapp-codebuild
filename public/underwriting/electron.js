const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
let isWin = process.platform === "win32";
let url;
if (isWin) {
  url = `file://${__dirname}/../build/index.html#/underwriting/`
} else {
  url = `file://${path.join(__dirname, "../build/index.html#/underwriting/")}`
}

function createWindow() {
mainWindow = new BrowserWindow({ width: 900, height: 680 });
mainWindow.loadURL(
isDev
? "http://localhost:3000/#/underwriting/"
: url
);
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

