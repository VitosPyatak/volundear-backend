import { Injectable } from '@nestjs/common';
import { QueryOptions } from 'general/mongoose.types';
import { LeanDocument, ObjectId } from 'mongoose';
import { VolunteerRequestDAO } from './volunteer-request.dao';
import { VolunteerRequestModel } from './volunteer-request.schema';
import { propertyOf } from 'utils/propertyOf';
import { VolunteerRequestDocument } from './volunteer-request.types';
import { plainToInstance } from 'class-transformer';
import { VolunteerRequest } from './volunteer-request';

@Injectable()
export class VolunteerRequestService {
  constructor(private readonly volunteerRequestDAO: VolunteerRequestDAO) {}

  public getByOwnerId = (ownerId: string | ObjectId, { populate }: QueryOptions) => {
    const query = this.volunteerRequestDAO.findByOwnerId(ownerId).lean();
    if (populate) query.populate(propertyOf<VolunteerRequestModel>('assingees'));
    return query.then(this.convertDocumentsToInstances);
  };

  private convertDocumentsToInstances = (requests: LeanDocument<VolunteerRequestDocument>[]) => {
    return plainToInstance(VolunteerRequest, requests);
  };
}
