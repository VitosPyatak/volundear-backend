import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDAO } from './user.dao';
import { userModelDefinition } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([userModelDefinition])],
  providers: [UserService, UserDAO],
  exports: [UserService],
  controllers: [],
})
export class UserModule {}
