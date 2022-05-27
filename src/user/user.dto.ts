import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from './user';

export class CreateUserDTO implements Partial<User> {
  @IsNotEmpty() firstname: string;

  @IsNotEmpty() lastname: string;

  @IsNotEmpty() phoneNumber: string;

  @IsOptional() description: string;

  @IsOptional() profilePicture: string;
}
