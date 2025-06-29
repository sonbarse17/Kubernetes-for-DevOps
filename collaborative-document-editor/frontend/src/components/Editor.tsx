import React, { useState } from 'react';

const Editor: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    return (
        <div className="editor">
            <textarea
                value={content}
                onChange={handleInputChange}
                placeholder="Start writing your document..."
                rows={20}
                cols={80}
            />
        </div>
    );
};

export default Editor;