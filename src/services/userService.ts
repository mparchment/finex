import UserModel, { IUser } from '../models/userModel';
import { omit } from 'lodash';
import { Request } from 'express';
import User from '../models/userModel';

export async function createUser(input: IUser) {
    try {
        const user = await UserModel.create(input);
        return omit(user.toJSON(), 'password')
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

export async function validatePassword({email, password}:{email: string, password: string}){
    const user = await UserModel.findOne({ email });

    if(!user){
        return false;
    }

    const isValid = await user.comparePassword(password);

    if(!isValid){ return false; }

    return omit(user.toJSON(), 'password')
}