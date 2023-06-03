// accountService.ts
import Account, { IAccount } from '../models/accountModel';
import { Request } from 'express';

export const createAccount = async (accountData: IAccount): Promise<IAccount> => {
  return Account.create(accountData);
};

export const getAllAccounts = async (userId?: string): Promise<IAccount[]> => {
  if (userId) {
    return Account.find({ userId });
  }
  return Account.find({});
};

export const getAccount = async (req: Request): Promise<IAccount | null> => {
  return Account.findById(req.params.id);
};

export const updateAccount = async (req: Request): Promise<IAccount | null> => {
  return Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
};

export const deleteAccount = async (req: Request): Promise<IAccount | null> => {
  return Account.findByIdAndDelete(req.params.id);
};
