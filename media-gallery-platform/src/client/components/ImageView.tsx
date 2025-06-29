import React from 'react';

interface ImageViewProps {
    src: string;
    alt: string;
}

const ImageView: React.FC<ImageViewProps> = ({ src, alt }) => {
    return (
        <div className="image-view">
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageView;