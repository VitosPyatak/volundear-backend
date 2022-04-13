import { propertyOf } from 'utils/propertyOf';
import { UserModel } from './user.schema';

export const ownerRequestProjection = {
  [propertyOf<UserModel>('_id')]: 1,
  [propertyOf<UserModel>('firstname')]: 1,
  [propertyOf<UserModel>('lastname')]: 1,
  [propertyOf<UserModel>('isVerified')]: 1,
};
