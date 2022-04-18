import { closeTestApplication, createTestInstance } from '../init';
import { TestInstance } from '../init/types';
import { UserModule } from '../../user/user.module';
import { UserService } from '../../user/user.service';
import { createUserMock } from './user.mock';
import { UserModel } from 'user/user.schema';
import { UserDocument } from 'user/user.types';

describe('UserService', () => {
  let instance: TestInstance;
  let newUser: UserDocument;

  beforeAll(async () => {
    instance = await createTestInstance(UserModule);
    await instance.app.listen(process.env.PORT);
  });

  afterAll(async () => {
    closeTestApplication(instance.app);
  });

  it('Create user', async () => {
    const userService = instance.module.get(UserService);
    newUser = await userService.createFromDTO(createUserMock);
    expect(newUser.firstname).toBe(createUserMock.firstname);
    expect(newUser.lastname).toBe(createUserMock.lastname);
    expect(newUser.phoneNumber).toBe(createUserMock.phoneNumber);
    expect(newUser.profilePicture).toBe(createUserMock.profilePicture);
    expect(newUser.isVerified).toBe(false);
  });

  it('Get user', async () => {
    const userService = instance.module.get(UserService);
    const user = await userService.getById(newUser._id);
    expect(user.firstname).toBe(newUser.firstname);
    expect(user.firstname).toBe(newUser.firstname);
  });
});
