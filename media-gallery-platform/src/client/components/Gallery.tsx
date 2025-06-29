import React, { useState, useEffect } from 'react';
import ImageView from './ImageView';
import VideoPlayer from './VideoPlayer';
import './styles.css';

const Gallery: React.FC = () => {
    const [mediaItems, setMediaItems] = useState<Array<{ id: number; type: string; url: string; title: string }>>([]);

    useEffect(() => {
        // Fetch media items from the server
        const fetchMediaItems = async () => {
            const response = await fetch('/api/media');
            const data = await response.json();
            setMediaItems(data);
        };

        fetchMediaItems();
    }, []);

    return (
        <div className="gallery">
            {mediaItems.map(item => (
                <div key={item.id} className="media-item">
                    {item.type === 'image' ? (
                        <ImageView src={item.url} alt={item.title} />
                    ) : (
                        <VideoPlayer src={item.url} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;