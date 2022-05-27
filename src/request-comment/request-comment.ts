import { Type } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { UserModel } from 'user/user.schema';
import { VolunteerRequestModel } from 'volunteer-request/volunteer-request.schema';
import { RequestCommentModel } from './request-comment.schema';

export class RequestComment extends RequestCommentModel {
  @Type(() => UserModel)
  sender: string | ObjectId | UserModel;

  @Type(() => VolunteerRequestModel)
  request: string | ObjectId | VolunteerRequestModel;
}
