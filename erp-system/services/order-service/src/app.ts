import express from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Order service is running on port ${PORT}`);
});