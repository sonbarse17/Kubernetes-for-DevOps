import axios from 'axios';
import { MediaItem, PaginatedResponse, MediaFilter, MediaStats } from '../../../types';

const api = axios.create({
  baseURL: '/api',
  timeout: 30000,
});

export const mediaApi = {
  async getMedia(filter: MediaFilter = {}): Promise<PaginatedResponse<MediaItem>> {
    const { data } = await api.get('/media', { params: filter });
    return data;
  },

  async uploadMedia(file: File): Promise<MediaItem> {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await api.post('/media/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data;
  },

  async deleteMedia(id: string): Promise<void> {
    await api.delete(`/media/${id}`);
  },

  async getStats(): Promise<MediaStats> {
    const { data } = await api.get('/stats');
    return data;
  }
};