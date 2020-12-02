const electron = require('electron')
const dialog = electron.dialog

const fs = require('fs')

const communicator = (ipc) => {

    this.comm = {
        register: (evtString) => {
            ipc.on(evtString, (evt, arg) => {

                const images = ['jpg', 'png', 'heic', 'tif'];
                const documents = ['pdf', 'xls', 'xlsx', 'doc', 'docx', 'csv', 'txt', 'zip'];
                
                const option = {
                    defaultPath: `${electron.app.getPath('downloads')}/${arg.filename}`,
                    filters: images.includes(arg.extension) ? 
                    [{ name: 'Images', extensions: [] }, { name: 'All Files', extensions: ['*'] }] :
                    documents.includes(arg.extension) ? 
                    [{ name: 'Documents', extensions: []}, { name: 'All Files', extensions: ['*'] }] :
                    [{ name: 'All Files', extensions: ['*'] }]
                }

                dialog.showSaveDialog(null, option, (filename) => {
                    if (!filename) {
                        evt.returnValue = {
                            success: false
                        }
                        return;
                    }

                    fs.writeFile(`${filename}.${arg.extension}`, arg.file, 'base64', (err) => {
                        console.log(err)
                        if (err) {
                            evt.returnValue = {
                                success: false
                            }
                            return
                        }

                        evt.returnValue = {
                            success: true
                        }
                    })
                })
            })
        }
    }

    return this.comm
}

exports.communicator = communicator
