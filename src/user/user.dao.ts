import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserModel } from './user.schema';
import { UserDocument } from './user.types';

@Injectable()
export class UserDAO {
  constructor(@InjectModel(UserModel.name) private readonly userDao: Model<UserDocument>) {}

  public getById = (id: string | ObjectId) => {
    return this.userDao.findById(id).lean();
  };
}
