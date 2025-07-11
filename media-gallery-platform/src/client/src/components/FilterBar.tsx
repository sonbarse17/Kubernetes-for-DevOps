import React from 'react';
import { Filter, Upload, SortAsc, SortDesc } from 'lucide-react';
import { MediaFilter } from '../../../types';

interface FilterBarProps {
  filter: MediaFilter;
  onFilterChange: (filter: MediaFilter) => void;
  onUploadClick: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, onFilterChange, onUploadClick }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={filter.type || ''}
            onChange={(e) => onFilterChange({ ...filter, type: e.target.value as any, page: 1 })}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Media</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={filter.sortBy || 'createdAt'}
            onChange={(e) => onFilterChange({ ...filter, sortBy: e.target.value as any, page: 1 })}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="createdAt">Date</option>
            <option value="originalName">Name</option>
            <option value="size">Size</option>
          </select>
          
          <button
            onClick={() => onFilterChange({ 
              ...filter, 
              sortOrder: filter.sortOrder === 'desc' ? 'asc' : 'desc',
              page: 1 
            })}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {filter.sortOrder === 'desc' ? (
              <SortDesc className="h-4 w-4 text-gray-500" />
            ) : (
              <SortAsc className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      <button
        onClick={onUploadClick}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        <Upload className="h-4 w-4" />
        <span>Upload</span>
      </button>
    </div>
  );
};

export default FilterBar;