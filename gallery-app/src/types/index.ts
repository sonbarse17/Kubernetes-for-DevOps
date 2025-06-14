// src/types/index.ts

export interface MediaItem {
    id: string;
    type: 'image' | 'video';
    url: string;
    title: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}