import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
  console.log('CONNECTED TO MONGODB');
}).catch((error) => {
  console.error('ERROR CONNECTING TO MONGODB:', error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);
// app.use('/api', transactionRoutes);
// app.use('/api', accountRoutes);

app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
