import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerRequestDAO } from './volunteer-request.dao';
import { volunteerRequestModelDefinition } from './volunteer-request.schema';
import { VolunteerRequestService } from './volunteer-request.service';

@Module({
  imports: [MongooseModule.forFeature([volunteerRequestModelDefinition])],
  providers: [VolunteerRequestService, VolunteerRequestDAO],
  exports: [VolunteerRequestService],
})
export class VolunteerRequestModule {}
