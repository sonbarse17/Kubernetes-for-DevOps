export interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  url: string;
  type: 'image' | 'video';
  dimensions?: {
    width: number;
    height: number;
  };
  duration?: number;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface MediaStats {
  total: number;
  images: number;
  videos: number;
  totalSize: number;
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export type MediaFilter = {
  type?: 'image' | 'video';
  page?: number;
  limit?: number;
  sortBy?: 'createdAt' | 'size' | 'originalName';
  sortOrder?: 'asc' | 'desc';
};