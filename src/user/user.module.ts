import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerRequestModule } from 'volunteer-request/volunteer-request.module';
import { UserController } from './user.controller';
import { UserDAO } from './user.dao';
import { userModelDefinition } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([userModelDefinition]), VolunteerRequestModule],
  providers: [UserService, UserDAO],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
