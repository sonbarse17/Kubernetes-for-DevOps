// src/server/models/Media.ts

export interface MediaItem {
    id: string;
    type: 'image' | 'video';
    url: string;
    title: string;
}

export class Media {
    constructor(public id: string, public type: 'image' | 'video', public url: string, public title: string) {}
}