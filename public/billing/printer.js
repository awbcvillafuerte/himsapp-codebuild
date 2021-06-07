const path = require('path')
const fs = require('fs')
const os = require('os')
const PDFWindow = require('electron-pdf-window')

let sender = null

const showDialog = pdf => {
  let win = new PDFWindow({
    minWidth: 1366,
    minHeight: 768,
    show: false
  })

  win.loadURL(pdf)

  win.webContents.print({silent: true})

  win.webContents.on('did-finish-load', () => {
    win.maximize()
    win.show()
  })

  win.on('closed', () => {
    win = null
    sender.send('print-to-pdf-close')
  })
}

module.exports = electron => {
  const ipc = electron.ipcMain

  ipc.on('print-to-pdf', (event, { data, fileName }) => {
    const pdfPath = path.join(os.tmpdir(), `${fileName}.pdf`)
    fs.writeFileSync(pdfPath, data, 'base64')
    sender = event.sender
    showDialog(pdfPath)
  })
}
