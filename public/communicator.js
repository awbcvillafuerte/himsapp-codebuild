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
                    filters: images.includes(arg.extension) ? 
                    [{ name: 'Images', extensions: [] }, { name: 'All Files', extensions: ['*'] }] :
                    documents.includes(arg.extension) ? 
                    [{ name: 'Documents', extensions: []}, { name: 'All Files', extensions: ['*'] }] :
                    [{ name: 'All Files', extensions: ['*'] }]
                }

                const filename = dialog.showSaveDialogSync(mainWindow, option)

                try { 
                    fs.writeFileSync(filename, 'asdasdas'); 
                  } catch(err) { 
                    console.error(err); 
                  } 

                console.log(filename)

                evt.returnValue = {
                    success: false
                }
            })
        }
    }

    return this.comm
}

exports.communicator = communicator
