window.ipcRenderer = require('electron').ipcRenderer
const electron = require('electron')
const ipc = electron.ipcRenderer

window.downloadFile = async function(args) {
  const reply = ipc.sendSync('sync-message', args)

  return reply
}
