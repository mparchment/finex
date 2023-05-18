import { Request, Response } from 'express';
import Account from '../models/accountModel';

export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    // Fetch all accounts from the database
    const accounts = await Account.find();

    // Return the response with status 200 and the accounts data
    res.status(200).json({ accounts });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
};

export const getAccountById = async (req: Request, res: Response) => {
  try {
    // Extract the accountId from the request parameters
    const { accountId } = req.params;

    // Fetch the account from the database based on the accountId
    const account = await Account.findById(accountId);

    if (!account) {
      // If the account is not found, return a 404 error
      res.status(404).json({ error: 'Account not found' });
    } else {
      // Return the response with status 200 and the account data
      res.status(200).json({ account });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch account' });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    // Extract the account data from the request body
    const { userId, accountNumber, balance } = req.body;

    // Create a new account in the database with the provided data
    const account = await Account.create({ userId, accountNumber, balance });

    // Return the response with status 201 and the created account
    res.status(201).json({ account });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to create account' });
  }
};