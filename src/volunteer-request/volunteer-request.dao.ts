import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DAOQueryOptions } from 'general/mongoose.types';
import { Model, ObjectId } from 'mongoose';
import { createBasicSearchQuery } from 'utils/search';
import { VolunteerRequestModel } from './volunteer-request.schema';
import { VolunteerRequestDocument } from './volunteer-request.types';

@Injectable()
export class VolunteerRequestDAO {
  constructor(@InjectModel(VolunteerRequestModel.name) private readonly volunteerRequestDao: Model<VolunteerRequestDocument>) {}

  public findByOwnerId = (owner: string | ObjectId) => {
    return this.volunteerRequestDao.find({ owner }).lean();
  };

  public createOne = (document) => {
    return this.volunteerRequestDao.create(document);
  };

  public findMany = (options?: DAOQueryOptions) => {
    return this.volunteerRequestDao.find({}, options?.projection, { skip: options?.skip, limit: options?.limit }).lean();
  };

  public search = (phrase: string, fields: string[]) => {
    return this.volunteerRequestDao.find({ $or: createBasicSearchQuery(phrase, fields) }).lean();
  };
}
