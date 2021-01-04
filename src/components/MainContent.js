import React from 'react';


const SelectedImage = ({ selectedFile }) => {
    const { name, path, size, format } = selectedFile;

    let w = size.width;
    let h = size.height;
    const isBigImage = w >= 800;

    if(isBigImage) {
        const wDiff = 800 / w;
        w = w * wDiff;
    }

    const imageStyle = !isBigImage ? { width: `${w}px`, height: `${h}px` }
                                   : { width: `${w}px`, height: `auto` };

    return (<div className="selected-image" >
                <h4 className="selected-image__title">Name: {name}</h4>
                <div className="selected-image__image-wrapper">
                    <img style={imageStyle} className="selected-image__image" alt={selectedFile.name} src={`file://${path}`} />
                </div>
                <div>
                    <p className="selected-image__text">Width: {size.width}</p>
                    <p className="selected-image__text">Height: {size.height}</p>
                    <p className="selected-image__text">Format: <b>{format}</b></p>
                    <p className="selected-image__text">Path: <b>{path}</b></p>
                </div>
            </div>);
};

const MainContent = (props) => {
    const { selectedFile } = props;

    const clickMinimize = (file) => {
         if(!file) return;

         console.log('click Min: ', file);
    };

    return (
        <div className="container__main-content">
            <div className="container__main-content__menu">
                <button onClick={() => clickMinimize(selectedFile)} >min</button>
            </div>
            {selectedFile && (<SelectedImage selectedFile={selectedFile} />)}
        </div>
    );

};

export default MainContent;
