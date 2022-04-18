import { Injectable } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { objectIdProjection } from 'general/projections';
import { LeanDocument, ObjectId } from 'mongoose';
import { User } from './user';
import { userSearchFields } from './user.configs';
import { UserDAO } from './user.dao';
import { CreateUserDTO } from './user.dto';
import { UserNotFoundByIdException } from './user.exception';
import { UserDocument } from './user.types';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDAO) {}

  public getById = (id: string | ObjectId) => {
    return this.userDao.getById(id).then((user) => this.processUserFind(id, user));
  };

  public doesUserExist = (id: string | ObjectId) => {
    return this.userDao.getById(id, { projection: objectIdProjection }).then((user) => this.processUserFind(id, user));
  };

  public createFromDTO = (dto: CreateUserDTO) => {
    const user = instanceToPlain(dto);
    return this.userDao.createOne(user);
  };

  public search = (phrase: string) => {
    return this.userDao.search(phrase, userSearchFields);
  };

  private processUserFind = (id: string | ObjectId, user: LeanDocument<UserDocument>) => {
    if (!user) throw new UserNotFoundByIdException(id);
    return plainToInstance(User, user);
  };
}
