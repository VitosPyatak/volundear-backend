import { Document } from 'mongoose';
import { UserModel } from './user.schema';

export type UserDocument = UserModel & Document;
