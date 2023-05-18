import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  address?: string;
  phone?: string;
}

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  address: String,
  phone: String,
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
