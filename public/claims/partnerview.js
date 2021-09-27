const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
let viewWindow

const createViewWindow = (parentWindow, url) => {
  viewWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    parent: parentWindow,
    webPreferences: {
      plugins: true
    }
  })
  viewWindow.removeMenu()
  viewWindow.loadURL(url)
  viewWindow.on('closed', () => (viewWindow = null))
}

module.exports = (electron, parentWindow) => {
  const ipc = electron.ipcMain
  ipc.on('preview-image', (e, options) => {
    createViewWindow(parentWindow, options.url)
  })
}
