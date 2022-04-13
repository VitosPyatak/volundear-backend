import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserService } from 'user/user.service';
import { CreateVolunteerRequestDTO } from 'volunteer-request/volunteer-request.dto';
import { VolunteerRequestService } from 'volunteer-request/volunteer-request.service';

@Injectable()
export class UserRequestService {
  constructor(private readonly userService: UserService, private readonly volunteerRequestService: VolunteerRequestService) {}

  public getByIdWithRequests = (id: string | ObjectId) => {
    return this.userService.getById(id).then((user) => {
      return this.volunteerRequestService.getByOwnerId(id).then((requests) => user.setRequests(requests));
    });
  };

  public createRequestFromDTO = async (dto: CreateVolunteerRequestDTO) => {
    if (await this.userService.doesUserExist(dto.owner)) {
      return this.volunteerRequestService.createFromDTO(dto);
    }
  };

  public searchUsersAndVolunterRequests = (phrase: string) => {
    return Promise.all([this.userService.search(phrase)]).then(([users]) => ({ users }));
  };
}
