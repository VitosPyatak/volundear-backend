import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class SampleDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNumberString()
  age: number;
}
