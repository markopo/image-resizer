import React from 'react';
import {sendOpenFile} from "../lib/send/sendOpenFile";


const SideBar = (props) => {
    const { openFiles, clickSelectedFile } = props;

    const clickOpenFile = () => {
            sendOpenFile();
    };

    return (
        <div className="sidebar container__sidebar">
            <div className="button-open-container">
                <button className="btn" id="button-open" onClick={() => clickOpenFile()}>Open file</button>
            </div>
            <div className="heading">
                Files
            </div>
            <div className="items file__items">
                {openFiles.map((file, index) => {
                    return (
                        <div key={index} className="item file">
                            <span onClick={() => clickSelectedFile(file)} title={file.path} className="item-text">{file.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
