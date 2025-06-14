import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import gatewayConfig from './config/gateway.config';

const app = express();

// Set up middleware for routing requests to the appropriate microservices
Object.keys(gatewayConfig.routes).forEach((route) => {
    const { target, pathRewrite } = gatewayConfig.routes[route];
    app.use(route, createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite,
    }));
});

// Start the API Gateway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});