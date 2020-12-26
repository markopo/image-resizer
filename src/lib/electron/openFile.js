const {dialog} = require('electron');
const {BrowserWindow} = require("electron");
const path = require('path');

module.exports = {
    openFile: function () {

        console.log('open file');



        const window = BrowserWindow.getFocusedWindow();

        const options = {
            title: 'Pick a image',
            filters: [
                {name: 'jpeg', extensions: ['jpg']},
                {name: 'png', extensions: ['png']}
            ]
        };

        dialog.showOpenDialog(window, options)
            .then(result => {
                const {canceled, filePaths} = result;

                console.log('result: ', result);

                if (canceled || !filePaths) return;

                const filename = path.basename(filePaths[0])

                const fileObj = {
                    name: filename,
                    path: filePaths[0]
                };

                console.log('file: ', fileObj);

                window.webContents.send('app-event-reply', {action: 'open-file', data: fileObj});
            });
}

};
