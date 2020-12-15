const electron = require('electron')
const ipc = electron.ipcRenderer

window.downloadFile = async function(args) {
  const reply = await ipc.sendSync('sync-message', args)

  return reply
}
