import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:3000'],
    credentials: true
}));
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Define the routes for the microservices
const serviceRoutes = {
    '/auth': 'http://auth-service:3000',
    '/projects': 'http://project-service:3000',
    '/tasks': 'http://task-service:3000',
    '/users': 'http://user-service:3000',
};

// Set up proxy middleware for each service
Object.keys(serviceRoutes).forEach(route => {
    app.use(`/api${route}`, createProxyMiddleware({ 
        target: serviceRoutes[route], 
        changeOrigin: true,
        pathRewrite: { [`^/api`]: '' }
    }));
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});