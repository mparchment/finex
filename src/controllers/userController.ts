import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Fetch all users from the database
    const users: IUser[] = await User.find();

    // Return the response with status 200 and the users data
    res.status(200).json({ users });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    // Extract the userId from the request parameters
    const { id } = req.params;

    // Find the user by ID in the database
    const user: IUser | null = await User.findById(id);

    if (!user) {
      // If the user is not found, return a 404 error
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the response with status 200 and the user data
    res.status(200).json({ user });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // Extract the user data from the request body
    const { name, email, password, role, address, phone, dob } = req.body;

    // Create a new user in the database with the provided data
    const user: IUser = await User.create({ name, email, password, role, address, phone, dob });

    // Return the response with status 201 and the created user
    res.status(201).json({ user });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    // Extract the userId from the request parameters
    const { id } = req.params;

    // Extract the user data from the request body
    const { name, email, password, address, phone, dob } = req.body;

    // Find the user by ID in the database
    const user: IUser | null = await User.findByIdAndUpdate(id, 
      { name, email, password, address, phone, dob },
      { new: true }
    );

    if (!user) {
      // If the user is not found, return a 404 error
      res.status(404).json({ error: 'User not found' });
    } else {
      // Return the response with status 200 and the updated user
      res.status(200).json({ user });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to update user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // Extract the userId from the request parameters
    const { id } = req.params;

    // Find the user by ID in the database
    const deletedUser: IUser | null = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      // If the user is not found, return a 404 error
      res.status(404).json({ error: 'User not found' });
    } else {
      // Return the response with status 200 and a success message
      res.status(200).json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
