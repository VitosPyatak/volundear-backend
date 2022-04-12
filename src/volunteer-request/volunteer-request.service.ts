import { Injectable } from '@nestjs/common';
import { QueryOptions } from 'general/mongoose.types';
import { ObjectId } from 'mongoose';
import { VolunteerRequestManager } from './volunteer-request.manager';
import { VolunteerRequestDAO } from './volunteer-request.dao';
import { VolunteerRequestModel } from './volunteer-request.schema';
import { propertyOf } from 'utils/propertyOf';

@Injectable()
export class VolunteerRequestService {
  constructor(private readonly volunteerRequestDAO: VolunteerRequestDAO) {}

  public getByOwnerId = (ownerId: string | ObjectId, { populate }: QueryOptions) => {
    const query = this.volunteerRequestDAO.findByOwnerId(ownerId).lean();
    if (populate) query.populate(propertyOf<VolunteerRequestModel>('assingees'));
    return query.then(VolunteerRequestManager.toClasses);
  };
}
