import { Router } from 'express';
import MediaController from '../controllers/mediaController';

const router = Router();
const mediaController = new MediaController();

// Route to fetch all media items
router.get('/media', mediaController.getAllMedia);

// Route to fetch a single media item by ID
router.get('/media/:id', mediaController.getMediaById);

export default router;