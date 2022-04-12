import { Document } from 'mongoose';
import { UserModel } from './user.schema';

export type UserDocument = UserModel & Document;

export enum VolunteerRequestStatus {
  active = 'active',
  closed = 'closed',
  onHold = 'onHold',
}

export enum VolunteerRequestCategory {
  military = 'military',
  transportation = 'transportation',
  animals = 'animals',
  other = 'other',
}
