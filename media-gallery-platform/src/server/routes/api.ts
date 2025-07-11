import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import Media from '../models/Media';
import { validateFile, queryValidation } from '../utils/validation';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../../uploads');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
    files: 1
  },
  fileFilter: (req, file, cb) => {
    try {
      validateFile(file);
      cb(null, true);
    } catch (error) {
      cb(new Error(error.message));
    }
  }
});

// Get all media with pagination and filtering
router.get('/media', async (req, res) => {
  try {
    const { error, value } = queryValidation.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { page, limit, type, sortBy, sortOrder } = value;
    const skip = (page - 1) * limit;
    
    const filter = type ? { type } : {};
    const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    const [media, total] = await Promise.all([
      Media.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      Media.countDocuments(filter)
    ]);

    res.json({
      data: media,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get media error:', error);
    res.status(500).json({ error: 'Failed to fetch media' });
  }
});

// Get single media item
router.get('/media/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }
    res.json(media);
  } catch (error) {
    console.error('Get media by ID error:', error);
    res.status(500).json({ error: 'Failed to fetch media' });
  }
});

// Upload media
router.post('/media/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    const media = new Media({
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
      url: fileUrl,
      type: req.file.mimetype.startsWith('image/') ? 'image' : 'video'
    });

    await media.save();
    res.status(201).json(media);
  } catch (error) {
    console.error('Upload error:', error);
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Delete media
router.delete('/media/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    // Delete file from filesystem
    if (fs.existsSync(media.path)) {
      fs.unlinkSync(media.path);
    }

    // Delete thumbnail if exists
    if (media.thumbnail && fs.existsSync(media.thumbnail)) {
      fs.unlinkSync(media.thumbnail);
    }

    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete media' });
  }
});

// Get media stats
router.get('/stats', async (req, res) => {
  try {
    const [totalCount, imageCount, videoCount, totalSize] = await Promise.all([
      Media.countDocuments(),
      Media.countDocuments({ type: 'image' }),
      Media.countDocuments({ type: 'video' }),
      Media.aggregate([{ $group: { _id: null, total: { $sum: '$size' } } }])
    ]);

    res.json({
      total: totalCount,
      images: imageCount,
      videos: videoCount,
      totalSize: totalSize[0]?.total || 0
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;