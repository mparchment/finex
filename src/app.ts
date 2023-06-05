import express from 'express';
import userRoutes from './routes/userRoutes';

import dotenv from 'dotenv';
import connect from './utils/connect';
import transactionRoutes from './routes/transactionRoutes';
import accountRoutes from './routes/accountRoutes';

import cors from 'cors';
import jwt from 'jsonwebtoken';

dotenv.config(); // Load environment variables from .env file

const app = express();

connect(); // Connect the app to MongoDB database using utils/connect.ts

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/users/checkToken', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.PRIVATE_KEY!, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      
      return res.sendStatus(200);
    });
});

app.use('/api', userRoutes);
app.use('/api', transactionRoutes);
app.use('/api', accountRoutes);

export default app;
