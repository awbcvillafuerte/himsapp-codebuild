const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
let isWin = process.platform === "win32";
let splashPath, loginPath, landingPagePath;

if (isWin) {
    splashPath = `file://${__dirname}/../build/splash.html`;
    loginPath = `file://${__dirname}/../build/login.html`;
    landingPagePath = `file://${__dirname}/../build/customer-care/index.html#/customer-care/`;
} else {
    splashPath = `file://${path.join(__dirname, "../build/splash.html")}`;
    loginPath = `file://${path.join(__dirname, "../build/login.html")}`;
    landingPagePath = `file://${path.join(
        __dirname,
        "../build/customer-care/index.html#/customer-care/",
    )}`;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        show: false,
    });
    mainWindow.setIcon(path.join(__dirname, "../build/HIMS-Icon.png"));

    splash = new BrowserWindow({
        width: 900,
        height: 600,
    });
    splash.loadURL(splashPath);

    login = new BrowserWindow({
        width: 900,
        height: 600,
        show: false,
    });

    setTimeout(() => {
        // login.loadURL(loginPath);
        login.loadFile('build/index.html');
    }, 2000);

    login.once("ready-to-show", () => {
        splash.close();
        login.show();
    });

    // login.on("scroll-touch-begin", () => {
    //     login.close();
    //     mainWindow.loadURL(
    //         isDev ? "http://localhost:3000/#/customer-care/" : landingPagePath,
    //     );
    //     mainWindow.show();
    // });

    // login.on('resize', () => {
    //     login.close();
    //     mainWindow.loadURL(
    //         isDev
    //         ? "http://localhost:3000/#/customer-care/"
    //         : `file://${path.join(__dirname, "../build/membership/index.html#/membership/")}`
    //     );
    //     mainWindow.show();
    // });
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
