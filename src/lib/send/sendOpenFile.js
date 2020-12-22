import {isElectron} from "../isElectron";


export function sendOpenFile() {
    if(!isElectron()) return;

    console.log('sendOpenFile');
    window.ipcRenderer.send('app-event-send', 'send-file');

}
