import React from 'react';

const FileMenu: React.FC = () => {
    const handleOpen = () => {
        // Logic for opening a file
    };

    const handleSave = () => {
        // Logic for saving a file
    };

    const handleExport = () => {
        // Logic for exporting a file
    };

    return (
        <div className="file-menu">
            <button onClick={handleOpen}>Open</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleExport}>Export</button>
        </div>
    );
};

export default FileMenu;