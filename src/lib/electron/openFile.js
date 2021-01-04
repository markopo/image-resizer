const {dialog} = require('electron');
const {BrowserWindow} = require("electron");
const gm = require("gm").subClass({imageMagick: true});
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

                const filePath = filePaths[0];
                const filename = path.basename(filePath);

                gm(filePath).identify(function (err, value) {
                      if(err) {
                          console.log('error reading file: ', err);
                          return;
                      }

                      console.log('value: ', value);
                      const { format, size } = value;

                      const fileObj = {
                        name: filename,
                        path: filePath,
                        size: size,
                        format: format
                      };

                      console.log('file: ', fileObj);
                      window.webContents.send('app-event-reply', {action: 'open-file', data: fileObj});
                });
            });
}

};
