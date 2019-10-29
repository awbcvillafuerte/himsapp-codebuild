const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let isWin = process.platform === "win32";
let url;
if (isWin) {
  url = `file://${__dirname}/../build/index.html#/customer-care/`
} else {
  url = `file://${path.join(__dirname, "../build/index.html#/customer-care/")}`
}

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1200, height: 680 });
  mainWindow.loadURL(
  isDev
    ? "http://localhost:3000/#/customer-care/"
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




// let mainWindow;
// function createWindow() {
// mainWindow = new BrowserWindow({ width: 1200, height: 680 });
// mainWindow.loadURL(
// isDev
// ? "http://localhost:3000/#/customer-care/"
// : `file://${path.join(__dirname, "../build/index.html#/customer-care/")}`
// );
// mainWindow.on("closed", () => (mainWindow = null));
// }
// app.on("ready", createWindow);
// app.on("window-all-closed", () => {
// if (process.platform !== "darwin") {
// app.quit();
// }
// });
// app.on("activate", () => {
// if (mainWindow === null) {
// createWindow();
// }
// });

