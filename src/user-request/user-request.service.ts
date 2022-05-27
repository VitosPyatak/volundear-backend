import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserService } from 'user/user.service';
import { CreateVolunteerRequestDTO } from 'volunteer-request/volunteer-request.dto';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';

@Injectable()
export class UserRequestService {
  constructor(private readonly userService: UserService, private readonly volunteerRequestService: VolunteerRequestService) {}

  public createRequestFromDTO = async (dto: CreateVolunteerRequestDTO) => {
    if (await this.userService.doesUserExist(dto.owner)) {
      return this.volunteerRequestService.createFromDTO(dto);
    }
  };

  public searchUsersAndVolunterRequests = (phrase: string) => {
    return Promise.all([this.userService.search(phrase), this.volunteerRequestService.search(phrase)]).then(([users, requests]) => ({
      users,
      requests,
    }));
  };

  public getRequestsByOwnerId = async (id: string) => {
    if (await this.userService.doesUserExist(id)) {
      return this.volunteerRequestService.getByOwnerId(id);
    }
  };
}
