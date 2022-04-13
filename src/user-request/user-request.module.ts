import { Module } from '@nestjs/common';
import { UserController } from 'user/user.controller';
import { UserModule } from 'user/user.module';
import { VolunteerRequestModule } from 'volunteer-request/volunteer-request.module';
import { UserRequestService } from './user-request.service';

@Module({
  imports: [UserModule, VolunteerRequestModule],
  providers: [UserRequestService],
  exports: [UserRequestService],
  controllers: [UserController],
})
export class UserRequestModule {}
