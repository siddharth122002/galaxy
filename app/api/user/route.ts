
import { connectDB } from '../../../utils/connectDB';
import User from '../../../models/User'; // Assuming your model is stored in models/User
import { NextResponse } from 'next/server';

// Define the response type
interface Data {
  message: string;
  user?: object;
  error?: string;
}

export async function POST(req: Request) {
    try {
      await connectDB();
      const { firstName, lastName, email, password } = await req.json();
  
      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
      }
  
      // Create a new user
      const newUser = new User({
        firstName,
        lastName,
        email,
        password, // You should hash the password before saving
      });
  
      await newUser.save();
  
      return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
      console.error('Error creating user:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }