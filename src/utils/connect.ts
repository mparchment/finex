import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger';

async function connect(){
    const uri = process.env.MONGO_URI;
    
    try {
        await mongoose.connect(uri);
        logger.info('Connected to MongoDB.');
    } catch (error) {
        logger.info('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connect;