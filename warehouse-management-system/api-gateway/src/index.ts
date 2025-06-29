import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// Define routes to microservices
app.use('/api/products', createProxyMiddleware({ target: 'http://product-service:4000', changeOrigin: true }));
app.use('/api/orders', createProxyMiddleware({ target: 'http://order-service:4001', changeOrigin: true }));
app.use('/api/users', createProxyMiddleware({ target: 'http://user-service:4002', changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});