import { Request, Response } from 'express';
import Transaction from '../models/transactionModel';

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    // Fetch all transactions from the database
    const transactions = await Transaction.find();

    // Return the response with status 200 and the transactions data
    res.status(200).json({ transactions });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    // Extract the transactionId from the request parameters
    const { transactionId } = req.params;

    // Fetch the transaction from the database based on the transactionId
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      // If the transaction is not found, return a 404 error
      res.status(404).json({ error: 'Transaction not found' });
    } else {
      // Return the response with status 200 and the transaction data
      res.status(200).json({ transaction });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch transaction' });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    // Extract the transaction data from the request body
    const { sourceAccountId, destinationAccountId, amount } = req.body;

    // Create a new transaction in the database with the provided data
    const transaction = await Transaction.create({ sourceAccountId, destinationAccountId, amount });

    // Return the response with status 201 and the created transaction
    res.status(201).json({ transaction });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};
