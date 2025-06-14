import React from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import FileMenu from './components/FileMenu';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <FileMenu />
            <Toolbar />
            <Editor />
        </div>
    );
};

export default App;