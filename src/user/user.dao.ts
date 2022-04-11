import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.schema';
import { UserDocument } from './user.types';

@Injectable()
export class UserDAO {
  constructor(@InjectModel(UserModel.name) private cat: Model<UserDocument>) {}
}
