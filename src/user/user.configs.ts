import { UserModel } from './user.schema';

export const userSearchFields: (keyof UserModel)[] = ['firstname', 'lastname', 'phoneNumber'];
