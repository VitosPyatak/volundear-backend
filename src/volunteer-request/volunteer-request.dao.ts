import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { VolunteerRequestModel } from './volunteer-request.schema';
import { VolunteerRequestDocument } from './volunteer-request.types';

@Injectable()
export class VolunteerRequestDAO {
  constructor(@InjectModel(VolunteerRequestModel.name) private readonly volunteerRequest: Model<VolunteerRequestDocument>) {}

  public findByOwnerId = (owner: string | ObjectId) => {
    return this.volunteerRequest.find({ owner }).lean();
  };
}
