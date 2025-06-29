import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/order-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/orders', (req, res) => {
    res.send('Get all orders');
});

app.post('/orders', (req, res) => {
    res.send('Create a new order');
});

// Start server
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});