import Joi from 'joi';

export const uploadValidation = Joi.object({
  mimetype: Joi.string().valid(
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'video/mp4', 'video/webm', 'video/quicktime'
  ).required(),
  size: Joi.number().max(50 * 1024 * 1024).required(),
  originalname: Joi.string().max(255).required()
});

export const queryValidation = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(50).default(20),
  type: Joi.string().valid('image', 'video').optional(),
  sortBy: Joi.string().valid('createdAt', 'size', 'originalName').default('createdAt'),
  sortOrder: Joi.string().valid('asc', 'desc').default('desc')
});

export const validateFile = (file: Express.Multer.File) => {
  const { error } = uploadValidation.validate({
    mimetype: file.mimetype,
    size: file.size,
    originalname: file.originalname
  });
  
  if (error) {
    throw new Error(error.details[0].message);
  }
  
  return true;
};