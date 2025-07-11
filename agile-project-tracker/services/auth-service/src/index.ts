import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose configuration for v8.x
mongoose.set('strictQuery', false);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb:27017/auth-service')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', userRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'Auth service is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});