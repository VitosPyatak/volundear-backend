import { HttpException, HttpStatus } from '@nestjs/common';
import { ObjectId } from 'mongoose';

export class UserNotFoundByIdException extends HttpException {
  constructor(userId: string | ObjectId) {
    super(`User with id ${userId} is not found`, HttpStatus.NOT_FOUND);
  }
}
