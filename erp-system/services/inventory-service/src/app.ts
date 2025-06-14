import express from 'express';
import bodyParser from 'body-parser';
import inventoryRoutes from './routes/inventoryRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/inventory', inventoryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Inventory service running on port ${PORT}`);
});