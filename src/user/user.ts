import { Type } from 'class-transformer';
import { VolunteerRequest } from 'volunteer-request/volunteer-request';
import { UserModel } from './user.schema';

export class User extends UserModel {
  // TODO: type
  createdAt;
}
