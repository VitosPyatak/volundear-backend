import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public createUser(@Body() body: CreateUserDTO) {
    return this.userService.createFromDTO(body);
  }

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userService.getById(id);
  }
}
