import React from 'react';
import './css/ion.min.css';
import './css/styles.css';
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";


function App() {

  return (
    <div className="App">
        <Header />
        <div className="container">
            <SideBar />
            <MainContent />
        </div>
    </div>
  );
}

export default App;
