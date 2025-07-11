import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';

const Toolbar: React.FC = () => {
  const editor = useEditor({
    extensions: [],
    editable: false,
  });

  // This toolbar will be enhanced to work with the main editor
  // For now, it provides a placeholder for formatting controls
  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <button 
          className="toolbar-button"
          title="Bold"
          type="button"
        >
          <strong>B</strong>
        </button>
        <button 
          className="toolbar-button"
          title="Italic"
          type="button"
        >
          <em>I</em>
        </button>
        <button 
          className="toolbar-button"
          title="Underline"
          type="button"
        >
          <u>U</u>
        </button>
      </div>
      <div className="toolbar-group">
        <select className="toolbar-select" title="Font Size">
          <option value="12">12px</option>
          <option value="14" selected>14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="24">24px</option>
        </select>
      </div>
    </div>
  );
};

export default Toolbar;