import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';
import { UserDAO } from './user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDAO, private readonly volunteerRequestService: VolunteerRequestService) {}

  public getById = (id: string | ObjectId) => {
    return this.userDao.getById(id).then((user) => {
      // TODO: create custom user
      if (!user) throw new Error('No such user');
      return user;
    });
  };

  public getByIdWithRequests = (id: string | ObjectId) => {
    return this.getById(id).then((user) => {
      return this.volunteerRequestService.getByOwnerId(id, { populate: true }).then((requests) => ({ ...user, requests }));
    });
  };
}
