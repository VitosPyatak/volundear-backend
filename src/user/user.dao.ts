import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DAOQueryOptions } from 'general/mongoose.types';
import { Model, ObjectId } from 'mongoose';
import { createBasicSearchQuery } from 'utils/search';
import { UserModel } from './user.schema';
import { UserDocument } from './user.types';

@Injectable()
export class UserDAO {
  constructor(@InjectModel(UserModel.name) private readonly userDao: Model<UserDocument>) {}

  public getById = (id: string | ObjectId, options?: DAOQueryOptions) => {
    return this.userDao.findById(id, options?.projection).lean();
  };

  public search = (phrase: string, fields: string[]) => {
    return this.userDao.find({ $or: createBasicSearchQuery(phrase, fields) }).lean();
  };

  public createOne = (user) => {
    return this.userDao.create(user);
  };
}
