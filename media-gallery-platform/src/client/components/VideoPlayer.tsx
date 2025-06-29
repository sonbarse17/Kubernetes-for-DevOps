import React from 'react';

interface VideoPlayerProps {
    src: string;
    controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, controls = true }) => {
    return (
        <video width="100%" controls={controls}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;