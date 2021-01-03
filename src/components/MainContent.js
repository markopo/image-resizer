import React from 'react';

const MainContent = (props) => {
    const { selectedFile } = props;

    return (
        <div className="container__main-content">
            {selectedFile && (<div>
                <p>{selectedFile.name}</p>
                <p>{selectedFile.path}</p>
                <img alt={selectedFile.name} src={`file://${selectedFile.path}`} />
            </div>)}
        </div>
    );

};

export default MainContent;
