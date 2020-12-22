import React, { useState, useEffect } from 'react';
import './css/ion.min.css';
import './css/styles.css';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import {electronAppState} from "./lib/ElectronAppState";


function App() {
    const [ appState, setAppState ] = useState({});

    useEffect(() => {

        electronAppState(appState, (newState) => {
               setAppState(newState);
        });

    }, [appState]);

  return (
    <div className="App">
        <Header />
        <div className="container">
            <SideBar openFiles={appState['open-file'] || []} />
            <MainContent />
        </div>
    </div>
  );
}

export default App;
