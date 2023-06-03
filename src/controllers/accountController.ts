import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createAccount, getAllAccounts, getAccount, updateAccount, deleteAccount } from '../services/accountService';

export const createAccountHandler = async (req: Request, res: Response) => {
  try {
    const account = await createAccount(req.body); 
    res.status(201).json({ account }); 
  } catch (e: any) {
    logger.error(e);
    return res.status(409).json({ e: 'Account already exists' });
  }
};

export const getAllAccountsHandler = async (req: Request, res: Response) => {
  try {
    const accounts = await getAllAccounts();
    res.status(200).json({ accounts });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch accounts' });
  }
};

export const getAccountHandler = async (req: Request, res: Response) => {
  try {
    const account = await getAccount(req);

    if (!account) {
      return res.status(404).json({ e: 'Account not found' });
    }
    res.status(200).json({ account });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch account' });
  }
};

export const updateAccountHandler = async (req: Request, res: Response) => {
  try {
    const account = await updateAccount(req);

    if (!account) {
      return res.status(404).json({ e: 'Account not found' });
    }
    res.status(200).json({ account });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to update account' });
  }
};

export const deleteAccountHandler = async (req: Request, res: Response) => {
  try {
    const deletedAccount = await deleteAccount(req);

    if (!deletedAccount) {
      return res.status(404).json({ e: 'Account not found' });
    }
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to delete account' });
  }
};

export const getAccountsByUserHandler = async (req: Request, res: Response) => {
  try {
    const accounts = await getAllAccounts(req.params.userId);
    res.status(200).json({ accounts });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch accounts' });
  }
};