import React from 'react';


const SideBar = () => {

    return (
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
    );
};

export default SideBar;
