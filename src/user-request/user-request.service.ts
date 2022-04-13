import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserService } from 'user/user.service';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';

@Injectable()
export class UserRequestService {
  constructor(private readonly userService: UserService, private readonly volunteerRequestService: VolunteerRequestService) {}

  public getByIdWithRequests = (id: string | ObjectId) => {
    return this.userService.getById(id).then((user) => {
      return this.volunteerRequestService.getByOwnerId(id, { populate: true }).then((requests) => user.setRequests(requests));
    });
  };
}
