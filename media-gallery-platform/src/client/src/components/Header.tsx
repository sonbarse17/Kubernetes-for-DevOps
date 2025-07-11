import React from 'react';
import { Camera, Upload } from 'lucide-react';

interface HeaderProps {
  onUploadClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onUploadClick }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Camera className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Media Gallery</h1>
          </div>
          
          <button
            onClick={onUploadClick}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Upload className="h-4 w-4" />
            <span>Upload Media</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;