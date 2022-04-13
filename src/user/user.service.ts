import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';
import { User } from './user';
import { UserDAO } from './user.dao';
import { UserNotFoundByIdException } from './user.exception';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDAO) {}

  public getById = (id: string | ObjectId) => {
    return this.userDao.getById(id).then((user) => {
      if (!user) throw new UserNotFoundByIdException(id);
      return plainToInstance(User, user);
    });
  };
}
