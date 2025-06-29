import express from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Order Service is running on port ${PORT}`);
});

export default app;