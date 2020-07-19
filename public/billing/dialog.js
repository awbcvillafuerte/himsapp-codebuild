const fs = require('fs')

module.exports = (electron) => {
  const ipc = electron.ipcMain
  const { dialog, app } = electron || electron.remote

  // const { dialog, app } = remote

  ipc.on('open-save-dialog', (event, { data, fileName }) => {
    const extn = 'csv|xls|xlsx|xlsm|xlsb|xml'.split('|')

    dialog.showSaveDialog({
      title: 'Save File...',
      defaultPath: `${app.getPath('documents')}/${fileName}.csv`,
      buttonLabel: 'Save',
      filters: [{ name: 'CSV', extensions: extn }]
    }).then(res => {
      const { filePath, canceled } = res

      if (!filePath || canceled) {
        return dialog.showMessageBox({ title: 'Notice!', message: 'File saving was canceled' })
      }
      console.log(data)
      fs.writeFileSync(filePath, data, { encoding: 'base64' })
    })
  })
}
