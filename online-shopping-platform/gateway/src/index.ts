import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Proxy routes to respective microservices
app.use('/auth', (req, res) => {
    const url = `http://auth-service:${process.env.AUTH_SERVICE_PORT || 3001}${req.originalUrl}`;
    req.pipe(axios({ method: req.method, url, data: req.body })).pipe(res);
});

app.use('/products', (req, res) => {
    const url = `http://product-service:${process.env.PRODUCT_SERVICE_PORT || 3002}${req.originalUrl}`;
    req.pipe(axios({ method: req.method, url, data: req.body })).pipe(res);
});

app.use('/orders', (req, res) => {
    const url = `http://order-service:${process.env.ORDER_SERVICE_PORT || 3003}${req.originalUrl}`;
    req.pipe(axios({ method: req.method, url, data: req.body })).pipe(res);
});

app.use('/users', (req, res) => {
    const url = `http://user-service:${process.env.USER_SERVICE_PORT || 3004}${req.originalUrl}`;
    req.pipe(axios({ method: req.method, url, data: req.body })).pipe(res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});