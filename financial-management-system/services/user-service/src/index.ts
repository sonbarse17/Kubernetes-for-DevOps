import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// User routes
app.get('/users', (req, res) => {
    res.send('Get all users');
});

app.post('/users', (req, res) => {
    res.send('Create a new user');
});

// Start the server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});