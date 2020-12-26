import {isElectron} from "./isElectron";


export function electronAppState(getState = {}, setStateCb) {
    if(!isElectron()) return;


    console.log('log: ', getState, new Date().toISOString(), window.ipcRenderer);

    window.ipcRenderer.on('app-event-reply', ((event, args) => {
            const { action, data } = args;

            switch (action) {
                case 'open-file':

                    const openFiles = getState['open-file'] || [];

                    if(!openFiles.find(x => x.path === data.path)) {
                        openFiles.push(data);
                    }

                    const newState = { getState, ...{ 'open-file': openFiles } };
                    console.log('open file state: ', newState, openFiles);
                    setStateCb(newState);
                    break;
                default:
                    break;

            }


    }));




}
