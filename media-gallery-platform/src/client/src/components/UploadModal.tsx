import React from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, FileImage, Video } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: File[]) => void;
  uploading: boolean;
}

const UploadModal: React.FC<UploadModalProps> = ({ 
  isOpen, 
  onClose, 
  onUpload, 
  uploading 
}) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.webm', '.mov']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    onDrop: (files) => {
      if (files.length > 0) {
        onUpload(files);
      }
    }
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg shadow-xl max-w-md w-full"
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">Upload Media</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              disabled={uploading}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              } ${uploading ? 'pointer-events-none opacity-50' : ''}`}
            >
              <input {...getInputProps()} />
              
              {uploading ? (
                <div className="space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600">Uploading...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                    </p>
                    <p className="text-gray-500">or click to browse</p>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FileImage className="h-4 w-4 mr-1" />
                      Images
                    </div>
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-1" />
                      Videos
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Max file size: 50MB</p>
                </div>
              )}
            </div>

            {acceptedFiles.length > 0 && !uploading && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Selected Files ({acceptedFiles.length})
                </h3>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {acceptedFiles.map((file, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      {file.type.startsWith('image/') ? (
                        <FileImage className="h-4 w-4 mr-2" />
                      ) : (
                        <Video className="h-4 w-4 mr-2" />
                      )}
                      {file.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UploadModal;