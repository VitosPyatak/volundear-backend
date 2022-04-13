import { Injectable } from '@nestjs/common';
import { LeanDocument, ObjectId, Query } from 'mongoose';
import { VolunteerRequestDAO } from './volunteer-request.dao';
import { propertyOf } from 'utils/propertyOf';
import { VolunteerRequestDocument } from './volunteer-request.types';
import { instanceToPlain } from 'class-transformer';
import { VolunteerRequest } from './volunteer-request';
import { CreateVolunteerRequestDTO } from './volunteer-request.dto';
import { PaginationParams } from 'general/pagination.dto';
import { volunteerRequestManyPaginationProjection } from './volunteer-request.projection';
import { ConverterManager } from 'converter/converter.manager';
import { ownerRequestProjection } from 'user/user.projection';

@Injectable()
export class VolunteerRequestService {
  constructor(private readonly volunteerRequestDAO: VolunteerRequestDAO) {}

  public getByOwnerId = (ownerId: string | ObjectId) => {
    const query = this.volunteerRequestDAO.findByOwnerId(ownerId);
    return query.then(this.convertDocumentsToInstances);
  };

  public createFromDTO = (dto: CreateVolunteerRequestDTO) => {
    const volunteerRequest = instanceToPlain(dto);
    return this.volunteerRequestDAO.createOne(volunteerRequest);
  };

  public getPaginationRequests = ({ limit, page }: PaginationParams) => {
    const query = this.volunteerRequestDAO.findMany({ projection: volunteerRequestManyPaginationProjection, limit, skip: page });
    this.populatePaginationRequests(query);
    return query.then(this.convertDocumentsToInstances);
  };

  private convertDocumentsToInstances = (requests: LeanDocument<VolunteerRequestDocument>[]) => {
    return ConverterManager.toInstance(VolunteerRequest, requests);
  };

  private populatePaginationRequests = (query: Query<any, any>) => {
    query.populate(propertyOf<VolunteerRequest>('owner'), ownerRequestProjection);
  };
}
