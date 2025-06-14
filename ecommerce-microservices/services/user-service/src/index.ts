import express from 'express';

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for user management
app.get('/users', (req, res) => {
    res.send('List of users');
});

// Start the server
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});