const electron = require('electron')
const dialog = electron.dialog

const fs = require('fs')

const communicator = (ipc, mainWindow) => {

    this.comm = {
        register: (evtString) => {
            ipc.on(evtString, (evt, arg) => {

                const images = ['jpg', 'png', 'heic', 'tif'];
                const documents = ['pdf', 'xls', 'xlsx', 'doc', 'docx', 'csv', 'txt', 'zip'];
                
                const option = {
                    defaultPath: `${electron.app.getPath('downloads')}/${arg.filename}`,
                    title: 'Save As',
                    filters: images.includes(arg.extension) ? 
                    [{ name: 'Images', extensions: [] }, { name: 'All Files', extensions: ['*'] }] :
                    documents.includes(arg.extension) ? 
                    [{ name: 'Documents', extensions: []}, { name: 'All Files', extensions: ['*'] }] :
                    [{ name: 'All Files', extensions: ['*'] }]
                }

                const filename = dialog.showSaveDialogSync(mainWindow, option)

                try { 
                    fs.writeFileSync(`${filename}.${arg.extension}`, arg.file, 'base64')
                    if (filename !== undefined) {
                        evt.returnValue = {
                            success: true
                        }
                    } else {
                        evt.returnValue = {
                            success: false
                        }
                    }


                  } catch(err) { 
                    console.error(err); 
                    evt.returnValue = {
                        success: false
                    }
                  } 
            })
        }
    }

    return this.comm
}

exports.communicator = communicator
