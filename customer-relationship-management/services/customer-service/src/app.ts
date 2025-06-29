import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/customers', customerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Customer Service is running on port ${PORT}`);
});

export default app;