const { app,
    globalShortcut,
    BrowserWindow,
    Menu,
    ipcMain,
    dialog } = require('electron');
const fs = require('fs');


let window;

app.on('ready', () => {

    window = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });

    window.loadFile('index.html');


});

