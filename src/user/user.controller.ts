import { Controller, Get, Param } from '@nestjs/common';
import { UserRequestService } from 'user-request/user-request.service';

@Controller('user')
export class UserController {
  constructor(private readonly userRequestService: UserRequestService) {}

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userRequestService.getByIdWithRequests(id).then((user) => user.json());
  }
}
