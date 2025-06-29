import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Connect to MongoDB (or PostgreSQL)
mongoose.connect('mongodb://localhost:27017/ledger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Define routes for managing ledger entries
app.get('/ledger', (req, res) => {
    // Logic to retrieve ledger entries
    res.send('Retrieve ledger entries');
});

app.post('/ledger', (req, res) => {
    // Logic to create a new ledger entry
    res.send('Create a new ledger entry');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Ledger service running on port ${PORT}`);
});