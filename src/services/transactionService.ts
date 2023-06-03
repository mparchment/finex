import Transaction, { ITransaction } from '../models/transactionModel';
import { Request } from 'express';

export const createTransaction = async (transactionData: ITransaction): Promise<ITransaction> => {
  return Transaction.create(transactionData);
};

export const getAllTransactions = async (): Promise<ITransaction[]> => {
  return Transaction.find({});
};

export const getTransaction = async (req: Request): Promise<ITransaction | null> => {
  return Transaction.findById(req.params.id);
};

export const updateTransaction = async (req: Request): Promise<ITransaction | null> => {
  return Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
};

export const deleteTransaction = async (req: Request): Promise<ITransaction | null> => {
  return Transaction.findByIdAndDelete(req.params.id);
};
