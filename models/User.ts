import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the user document
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Create the schema for the user
const UserSchema: Schema<IUser> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Check if the model already exists, and if not, define it
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
