import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './userModel';

export interface ISession extends Document {
    user: IUser['_id'];
    valid: boolean;
    userAgent: string;
}

const sessionSchema = new Schema(
    {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String }
    },{
        timestamps: true,
    }
);


const Session = mongoose.model<ISession>('Session', sessionSchema);

export default Session;
