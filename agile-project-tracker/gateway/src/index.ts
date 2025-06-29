import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Define the routes for the microservices
const serviceRoutes = {
    '/auth': 'http://auth-service:3001',
    '/projects': 'http://project-service:3002',
    '/tasks': 'http://task-service:3003',
    '/users': 'http://user-service:3004',
};

// Set up proxy middleware for each service
Object.keys(serviceRoutes).forEach(route => {
    app.use(route, createProxyMiddleware({ target: serviceRoutes[route], changeOrigin: true }));
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});