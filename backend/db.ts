import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; 

    if (!MONGO_URI) {
      throw new Error('MongoDB URI not found in environment variables.');
    }

    await mongoose.connect(MONGO_URI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
