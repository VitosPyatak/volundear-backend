import { instanceToPlain, plainToInstance } from 'class-transformer';
import { LeanDocument } from 'mongoose';
import { VolunteerRequest } from 'volunteer-request/volunteer-request';
import { User } from './user';

import { UserDocument } from './user.types';

export class UserManager {
  constructor(private readonly user: User) {}

  static fromDocument = (user: LeanDocument<UserDocument>) => {
    return new UserManager(plainToInstance(User, user));
  };

  public json = () => {
    return instanceToPlain(this.user);
  };

  public setRequests = (requests: VolunteerRequest[]) => {
    this.user.requests = requests;
    return this;
  };

  public get = () => this.user;
}
