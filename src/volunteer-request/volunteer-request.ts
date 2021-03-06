import { Transform, Type } from 'class-transformer';
import { ObjectId, Schema } from 'mongoose';
import { UserModel } from 'user/user.schema';
import { VolunteerRequestModel } from './volunteer-request.schema';

export class VolunteerRequest extends VolunteerRequestModel {
  @Type(() => UserModel)
  owner: string | ObjectId | UserModel;

  @Type(() => UserModel)
  assignees: UserModel[];

  createdAt;
}
