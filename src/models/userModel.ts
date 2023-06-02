import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  address: string;
  phone: string;
  dob: Date;
  comparePassword(candidatePassword: string): Promise<boolean>; // A function to compare the passed password with the hashed password in the database.
}

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  address: String,
  phone: String,
  dob: Date,
});

// Hash the password before saving the user model with bcrypt [strongest hashing algorithm].
userSchema.pre<IUser>('save', async function (next) {
  const user = this as IUser; // 'this' refers to the current document about to be saved.

  if (!user.isModified('password')) return next();

  const saltRoonds = parseInt(process.env.SALT_ROUNDS as string); // Get the salt rounds from the environment variables.
  const salt = await bcrypt.genSalt(saltRoonds); // Generate a salt with the given number of rounds.
  const hash = await bcrypt.hashSync(user.password, salt); // Hash the password with the salt.

  user.password = hash; // Replace the plain text password with the hash and salt.

  return next();
});

// Compare the passed password with the hashed password in the database.
// Since it is an async function, it will return a Promise boolean value.
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as IUser;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const User = mongoose.model<IUser>('User', userSchema);

export default User;
