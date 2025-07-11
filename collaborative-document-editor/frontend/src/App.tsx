import React, { useState, useCallback } from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import FileMenu from './components/FileMenu';
import './styles/main.css';

export interface Document {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const App: React.FC = () => {
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null);
  const [content, setContent] = useState<string>('');

  const handleContentChange = useCallback((newContent: string) => {
    setContent(newContent);
    if (currentDocument) {
      setCurrentDocument({
        ...currentDocument,
        content: newContent,
        updatedAt: new Date()
      });
    }
  }, [currentDocument]);

  const handleDocumentLoad = useCallback((document: Document) => {
    setCurrentDocument(document);
    setContent(document.content);
  }, []);

  const handleNewDocument = useCallback(() => {
    const newDoc: Document = {
      id: Date.now().toString(),
      title: 'Untitled Document',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setCurrentDocument(newDoc);
    setContent('');
  }, []);

  return (
    <div className="app">
      <FileMenu 
        currentDocument={currentDocument}
        onDocumentLoad={handleDocumentLoad}
        onNewDocument={handleNewDocument}
      />
      <Toolbar />
      <Editor 
        content={content}
        onChange={handleContentChange}
      />
      <footer className="app-footer">
        <p>Created by <a href="https://github.com/sonbarse17/" target="_blank" rel="noopener noreferrer">Sushant Sonbarse</a></p>
      </footer>
    </div>
  );
};

export default App;