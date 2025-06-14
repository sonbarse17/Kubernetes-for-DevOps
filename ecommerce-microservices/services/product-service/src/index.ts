import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for managing products
app.get('/products', (req, res) => {
    res.send('List of products');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Product service is running on port ${PORT}`);
});