import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/invoice-service')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/invoices', (req, res) => {
    res.json({ message: 'List of invoices', invoices: [] });
});

app.post('/api/invoices', (req, res) => {
    const invoice = req.body;
    res.status(201).json({ message: 'Invoice created', invoice });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'invoice-service' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Invoice service running on port ${PORT}`);
});