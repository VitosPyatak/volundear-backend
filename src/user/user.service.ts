import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';
import { UserDAO } from './user.dao';
import { UserNotFoundByIdException } from './user.exception';
import { UserManager } from './user.manager';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDAO, private readonly volunteerRequestService: VolunteerRequestService) {}

  public getById = (id: string | ObjectId) => {
    return this.userDao.getById(id).then((user) => {
      if (!user) throw new UserNotFoundByIdException(id);
      return UserManager.fromDocument(user);
    });
  };

  public getByIdWithRequests = (id: string | ObjectId) => {
    return this.getById(id).then((user) => {
      return this.volunteerRequestService.getByOwnerId(id, { populate: true }).then((requests) => user.setRequests(requests));
    });
  };
}
