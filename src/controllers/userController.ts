import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../services/userService';
import { validatePassword } from '../services/userService';
import jwt from 'jsonwebtoken';
import { log } from 'console';
import dotenv from 'dotenv';

dotenv.config();

export const loginUserHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await validatePassword({ email, password });

    if (user) {
      const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
        phone: user.phone,
        dob: user.dob,
      };
      
      const token = jwt.sign({ _id: user._id }, process.env.PRIVATE_KEY!, { algorithm: 'RS256', expiresIn: '30m' });

      res.status(200).json({ message: 'Login successful', user: userResponse, token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers(req);
    res.status(200).json({ users });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch users' });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await getUser(req);

    if (!user) {
      return res.status(404).json({ e: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to fetch user' });
  }
};

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body); 
    res.status(201).json({ user }); 
  } catch (e: any) {
    logger.error(e);
    return res.status(409).json({ e: 'Email already exists' });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req);

    if (!user) {
      return res.status(404).json({ e: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to update user' });
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const deletedUser = await deleteUser(req);

    if (!deletedUser) {
      return res.status(404).json({ e: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (e: any) {
    logger.error(e);
    res.status(500).json({ e: 'Failed to delete user' });
  }
};
