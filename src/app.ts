import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes';
import dotenv from 'dotenv';
import connect from './utils/connect';

dotenv.config(); // Load environment variables from .env file

const app = express();

connect(); // Connect the app to MongoDB database using utils/connect.ts

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', sessionRoutes);
// app.use('/api', transactionRoutes);
// app.use('/api', accountRoutes);

export default app;
