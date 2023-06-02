import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connect(){
    const uri = process.env.MONGO_URI;
    
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connect;