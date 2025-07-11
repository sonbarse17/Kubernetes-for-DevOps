import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Download, Eye, Clock, FileImage } from 'lucide-react';
import { MediaItem } from '../../../types';

interface MediaCardProps {
  media: MediaItem;
  onDelete: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, onDelete }) => {
  const [imageError, setImageError] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-square bg-gray-100">
          {media.type === 'image' ? (
            imageError ? (
              <div className="w-full h-full flex items-center justify-center">
                <FileImage className="h-12 w-12 text-gray-400" />
              </div>
            ) : (
              <img
                src={media.url}
                alt={media.originalName}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            )
          ) : (
            <div className="relative w-full h-full">
              <video
                src={media.url}
                className="w-full h-full object-cover"
                muted
                preload="metadata"
              />
              {media.duration && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {formatDuration(media.duration)}
                </div>
              )}
            </div>
          )}
          
          <div className="absolute top-2 right-2 flex space-x-1">
            <button
              onClick={() => setShowPreview(true)}
              className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1.5 rounded-full transition-colors"
            >
              <Eye className="h-3 w-3" />
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 bg-opacity-75 hover:bg-opacity-100 text-white p-1.5 rounded-full transition-colors"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-medium text-gray-900 truncate text-sm">
            {media.originalName}
          </h3>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>{formatFileSize(media.size)}</span>
            <span className="capitalize">{media.type}</span>
          </div>
          {media.dimensions && (
            <div className="text-xs text-gray-500 mt-1">
              {media.dimensions.width} × {media.dimensions.height}
            </div>
          )}
        </div>
      </motion.div>

      {showPreview && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            {media.type === 'image' ? (
              <img
                src={media.url}
                alt={media.originalName}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                src={media.url}
                controls
                className="max-w-full max-h-full"
                autoPlay
              />
            )}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaCard;