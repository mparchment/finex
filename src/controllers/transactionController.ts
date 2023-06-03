import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createTransaction, getAllTransactions, getTransaction, updateTransaction, deleteTransaction } from '../services/transactionService';

export const createTransactionHandler = async (req: Request, res: Response) => {
  try {
    const transaction = await createTransaction(req.body); 
    res.status(201).json({ transaction }); 
  } catch (e: any) {
    logger.error(e);
    return res.status(400).json({ e: 'Error creating transaction' });
  }
};

export const getAllTransactionsHandler = async (_req: Request, res: Response) => {
  try {
    const transactions = await getAllTransactions();
    res.status(200).json({ transactions });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch transactions' });
  }
};

export const getTransactionHandler = async (req: Request, res: Response) => {
  try {
    const transaction = await getTransaction(req);

    if (!transaction) {
      return res.status(404).json({ e: 'Transaction not found' });
    }
    res.status(200).json({ transaction });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch transaction' });
  }
};

export const updateTransactionHandler = async (req: Request, res: Response) => {
  try {
    const transaction = await updateTransaction(req);

    if (!transaction) {
      return res.status(404).json({ e: 'Transaction not found' });
    }
    res.status(200).json({ transaction });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to update transaction' });
  }
};

export const deleteTransactionHandler = async (req: Request, res: Response) => {
  try {
    const deletedTransaction = await deleteTransaction(req);

    if (!deletedTransaction) {
      return res.status(404).json({ e: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to delete transaction' });
  }
};
