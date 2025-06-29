import { Request, Response } from 'express';
import Media from '../models/Media';

class MediaController {
    public async getMedia(req: Request, res: Response): Promise<void> {
        try {
            const mediaItems = await Media.find();
            res.status(200).json(mediaItems);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching media items', error });
        }
    }

    public async getMediaById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const mediaItem = await Media.findById(id);
            if (!mediaItem) {
                res.status(404).json({ message: 'Media item not found' });
                return;
            }
            res.status(200).json(mediaItem);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching media item', error });
        }
    }
}

export default new MediaController();