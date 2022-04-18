import { name, phone, random } from 'faker';
import { CreateUserDTO } from 'user/user.dto';

export const createUserMock: CreateUserDTO = {
  firstname: name.firstName(),
  lastname: name.lastName(),
  phoneNumber: phone.phoneNumber(),
  description: random.words(10),
  profilePicture: name.prefix(),
};
