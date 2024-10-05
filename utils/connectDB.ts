// lib/connectDB.ts
import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    isConnected = db.connections[0].readyState === 1;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
