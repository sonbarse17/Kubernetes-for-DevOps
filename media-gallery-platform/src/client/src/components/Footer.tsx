import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <span>Created by</span>
          <a 
            href="https://github.com/sonbarse17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="font-medium">Sushant Sonbarse</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;