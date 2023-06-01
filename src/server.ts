import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to MongoDB.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
// app.use('/api', transactionRoutes);
// app.use('/api', accountRoutes);

export default app;
