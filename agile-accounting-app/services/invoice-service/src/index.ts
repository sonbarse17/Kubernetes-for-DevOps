import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/invoice-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/invoices', (req, res) => {
    res.send('List of invoices');
});

app.post('/invoices', (req, res) => {
    const invoice = req.body;
    // Logic to save invoice
    res.status(201).send(invoice);
});

// Start server
app.listen(PORT, () => {
    console.log(`Invoice service running on port ${PORT}`);
});