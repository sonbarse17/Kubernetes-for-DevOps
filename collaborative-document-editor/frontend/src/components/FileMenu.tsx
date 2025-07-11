import React, { useRef } from 'react';
import axios from 'axios';
import { Document } from '../App';

interface FileMenuProps {
  currentDocument: Document | null;
  onDocumentLoad: (document: Document) => void;
  onNewDocument: () => void;
}

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const FileMenu: React.FC<FileMenuProps> = ({ 
  currentDocument, 
  onDocumentLoad, 
  onNewDocument 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNew = () => {
    onNewDocument();
  };

  const handleOpen = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const document: Document = {
        id: Date.now().toString(),
        title: file.name.replace(/\.[^/.]+$/, ""),
        content: text,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      onDocumentLoad(document);
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Error reading file');
    }
  };

  const handleSave = async () => {
    if (!currentDocument) {
      alert('No document to save');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/documents`, currentDocument);
      alert('Document saved successfully!');
    } catch (error) {
      console.error('Error saving document:', error);
      alert('Error saving document');
    }
  };

  const handleExport = () => {
    if (!currentDocument) {
      alert('No document to export');
      return;
    }

    const blob = new Blob([currentDocument.content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentDocument.title}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="file-menu">
      <button onClick={handleNew} className="menu-button">New</button>
      <button onClick={handleOpen} className="menu-button">Open</button>
      <button onClick={handleSave} className="menu-button">Save</button>
      <button onClick={handleExport} className="menu-button">Export</button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.html,.md"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileMenu;