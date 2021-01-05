import React from 'react';
import {sendMinimizeFile} from "../lib/send/sendOperation";


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
                    <table className="selected-image__table">
                        <tbody>
                            <tr>
                                <td>Width:</td>
                                <td className="bold">{size.width}</td>
                            </tr>
                            <tr>
                                <td>Height:</td>
                                <td className="bold">{size.height}</td>
                            </tr>
                            <tr>
                                <td>Format:</td>
                                <td className="bold">{format}</td>
                            </tr>
                            <tr>
                                <td>Path:</td>
                                <td className="bold">{path}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>);
};

const MainContent = (props) => {
    const { selectedFile } = props;

    const clickMinimize = (file) => {
         if(!file) return;

         console.log('click Min: ', file);
         sendMinimizeFile(file);
    };

    return (
        <div className="container__main-content">
            <div className="heading">
                Minimize file:
            </div>
            <div className="container__main-content__menu">
                {/*<input title="minimize size" type="range" min="10" max="90" style={{ width: '200px' }} />*/}
                {/*<input type="text" placeholder="minimize file name" />*/}
                <button onClick={() => clickMinimize(selectedFile)} >min</button>
            </div>
            {selectedFile && (<SelectedImage selectedFile={selectedFile} />)}
        </div>
    );

};

export default MainContent;
