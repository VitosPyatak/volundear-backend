import { Injectable } from '@nestjs/common';
import { UserDAO } from './user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDAO) {}
}
