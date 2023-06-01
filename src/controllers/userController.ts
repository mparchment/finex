import { Request, Response } from 'express';
import User from '../models/userModel';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

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
    const { userId } = req.params;

    // Fetch the user from the database based on the userId
    const user = await User.findById(userId);

    if (!user) {
      // If the user is not found, return a 404 error
      res.status(404).json({ error: 'User not found' });
    } else {
      // Return the response with status 200 and the user data
      res.status(200).json({ user });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // Extract the user data from the request body
    const { name, email, password, address, phone, dob } = req.body;

    // Create a new user in the database with the provided data
    const user = await User.create({ name, email, password, address, phone, dob });

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
    const { userId } = req.params;

    // Extract the user data from the request body
    const { name, email, password, address, phone, dob } = req.body;

    // Update the user in the database with the provided data
    const user = await User.findByIdAndUpdate(
      userId,
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
    const { userId } = req.params;

    // Delete the user from the database
    const deletedUser = await User.findByIdAndDelete(userId);

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
