import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/order-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Order schema
const orderSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: 'pending' },
});

const Order = mongoose.model('Order', orderSchema);

// API endpoints
app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    try {
        const result = await order.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).send('Order not found');
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Order service is running on http://localhost:${PORT}`);
});