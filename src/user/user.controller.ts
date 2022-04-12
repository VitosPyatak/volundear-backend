import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userService.getByIdWithRequests(id).then((user) => user.json());
  }
}
