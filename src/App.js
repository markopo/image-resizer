import React, { useState, useEffect } from 'react';
import './css/ion.min.css';
import './css/styles.css';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import {clientAppState, defaultAppState, electronAppState} from "./lib/ElectronAppState";


function App() {
    const [ appState, setAppState ] = useState(defaultAppState);

    const setStateCallback = (newState) => {
        console.log('newState: ', newState);
        setAppState(newState);
    };

    const clickSelectedFile = (file) => {
        const action = appState['selected-file'] === null ? 'select-file' : 'unselect-file';
        clientAppState(action, file, appState, setStateCallback);
        console.log('click selected ', appState);
    };

    useEffect(() => {
        electronAppState(appState, setStateCallback);
    }, [appState]);

  return (
    <div className="App">
        <Header />
        <div className="container">
            <SideBar openFiles={appState['open-file']} clickSelectedFile={clickSelectedFile} />
            <MainContent selectedFile={appState['selected-file']} />
        </div>
    </div>
  );
}

export default App;
