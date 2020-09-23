const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
let viewWindow

const createViewWindow = (parentWindow, url) => {
  console.log('Preview Partner Dialog Create Window URL', url)
  console.log('Preview Partner Dialog Create Window Parent Window', parentWindow)
  viewWindow = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      plugins: true
    }
  })
  viewWindow.removeMenu()
  try{
    viewWindow.loadURL(url)
  }catch(err){
    console.log('Preview Partner Error', err)
  }
  viewWindow.on('closed', () => (viewWindow = null))
}

module.exports = (electron, parentWindow) => {
  const ipc = electron.ipcMain
  ipc.on('preview-image', (e, options) => {
    console.log('Preview Partner Dialog')
    console.log('Preview Partner Dialog IPC', ipc)
    
    createViewWindow(parentWindow, options.url)
  })
}
