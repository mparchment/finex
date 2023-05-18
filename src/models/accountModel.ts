import mongoose, { Schema, Document } from 'mongoose';

interface IAccount extends Document {
  userId: string;
  accountNumber: string;
  balance: number;
  accountType: string;
  accountStatus: string;
}

const accountSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  accountNumber: String,
  balance: Number,
  accountType: String,
  accountStatus: String,
});

const Account = mongoose.model<IAccount>('Account', accountSchema);

export default Account;