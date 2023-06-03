import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  sourceAccountId: string;
  destinationAccountId: string;
  amount: number;
  timestamp: Date;
  transactionStatus: string;
}

const transactionSchema = new Schema({
  sourceAccountId: { type: Schema.Types.ObjectId, ref: 'Account' },
  destinationAccountId: { type: Schema.Types.ObjectId, ref: 'Account' },
  amount: Number,
  timestamp: Date,
  transactionStatus: String,
});

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;
