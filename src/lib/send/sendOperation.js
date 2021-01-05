import {isElectron} from "../isElectron";


export function sendOpenFile() {
   sendOperation('send-file');
}

export function sendMinimizeFile(file) {
    sendOperation('send-minimize-file', file);
}

function sendOperation(action, data= null) {
    if(!isElectron()) return;

    window.ipcRenderer.send('app-event-send', {
        action: action,
        data: data
    });
}
