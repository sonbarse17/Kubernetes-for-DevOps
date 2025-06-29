import React from 'react';

const Toolbar: React.FC = () => {
    const handleBold = () => {
        document.execCommand('bold');
    };

    const handleItalic = () => {
        document.execCommand('italic');
    };

    const handleUnderline = () => {
        document.execCommand('underline');
    };

    return (
        <div className="toolbar">
            <button onClick={handleBold}>Bold</button>
            <button onClick={handleItalic}>Italic</button>
            <button onClick={handleUnderline}>Underline</button>
        </div>
    );
};

export default Toolbar;