import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DAOQueryOptions } from 'general/mongoose.types';
import { Model, ObjectId } from 'mongoose';
import { VolunteerRequestModel } from './volunteer-request.schema';
import { VolunteerRequestDocument } from './volunteer-request.types';

@Injectable()
export class VolunteerRequestDAO {
  constructor(@InjectModel(VolunteerRequestModel.name) private readonly volunteerRequest: Model<VolunteerRequestDocument>) {}

  public findByOwnerId = (owner: string | ObjectId) => {
    return this.volunteerRequest.find({ owner }).lean();
  };

  public createOne = (document) => {
    return this.volunteerRequest.create(document);
  };

  public findMany = (options?: DAOQueryOptions) => {
    return this.volunteerRequest.find({}, options?.projection, { skip: options?.skip, limit: options?.limit }).lean();
  };
}
