import UserModel, { IUser } from '../models/userModel';
import { Request } from 'express';

export async function createUser(input: IUser) {
    try {
        return await UserModel.create(input);
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getAllUsers(req: Request) {
    try {
        return await UserModel.find();
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getUser(req: Request) {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function updateUser(req: Request) {
    try {
        const { id } = req.params;
        const userUpdateData = req.body;
        const user = await UserModel.findByIdAndUpdate(id, userUpdateData, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function deleteUser(req: Request) {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (e: any) {
        throw new Error(e);
    }
}
