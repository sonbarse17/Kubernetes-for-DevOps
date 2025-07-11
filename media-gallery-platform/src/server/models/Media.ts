import mongoose, { Document, Schema } from 'mongoose';

export interface IMedia extends Document {
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  path: string;
  url: string;
  type: 'image' | 'video';
  dimensions?: {
    width: number;
    height: number;
  };
  duration?: number;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MediaSchema: Schema = new Schema({
  filename: { 
    type: String, 
    required: true,
    unique: true,
    index: true
  },
  originalName: { 
    type: String, 
    required: true,
    maxlength: 255
  },
  mimetype: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v: string) {
        const allowedTypes = process.env.ALLOWED_FILE_TYPES?.split(',') || [
          'image/jpeg', 'image/png', 'image/gif', 'image/webp',
          'video/mp4', 'video/webm', 'video/quicktime'
        ];
        return allowedTypes.includes(v);
      },
      message: 'File type not supported'
    }
  },
  size: { 
    type: Number, 
    required: true,
    min: 0,
    max: 50 * 1024 * 1024
  },
  path: { 
    type: String, 
    required: true 
  },
  url: {
    type: String,
    required: true
  },
  type: { 
    type: String, 
    enum: ['image', 'video'], 
    required: true 
  },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  duration: { type: Number },
  thumbnail: { type: String }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

MediaSchema.index({ type: 1, createdAt: -1 });
MediaSchema.index({ mimetype: 1 });

export default mongoose.model<IMedia>('Media', MediaSchema);