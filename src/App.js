import React from 'react';
import './css/ion.min.css';
import './css/styles.css';


function App() {

  return (
    <div className="App">
        <header className="bar tall">
            <h1 className="title">Image Resizer</h1>
        </header>
        <div className="container">
            <div className="sidebar container__sidebar">
                <div className="button-open-container">
                    <button className="btn" id="button-open">Open file</button>
                </div>
                <div className="heading">
                    Files
                </div>
                <div className="items file__items">
                    <div className="item file">
                        Picture
                    </div>
                    <div className="item file">
                        Picture
                    </div>
                    <div className="item file">
                        Picture
                    </div>
                </div>
            </div>
            <div className="container__main-content">

            </div>
        </div>
    </div>
  );
}

export default App;
