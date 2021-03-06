import { Injectable } from '@nestjs/common';
import { LeanDocument, ObjectId, Query } from 'mongoose';
import { VolunteerRequestDAO } from './volunteer-request.dao';
import { propertyOf } from 'utils/propertyOf';
import { VolunteerRequestDocument } from './volunteer-request.types';
import { VolunteerRequest } from './volunteer-request';
import { CreateVolunteerRequestDTO } from './volunteer-request.dto';
import { PaginationParams } from 'general/dto';
import { volunteerRequestManyPaginationProjection } from './volunteer-request.projection';
import { ownerRequestProjection } from 'user/user.projection';
import { volunteerRequestSearchFields } from './volunteer-request.configs';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class VolunteerRequestService {
  constructor(private readonly volunteerRequestDAO: VolunteerRequestDAO) {}

  public getByOwnerId = (ownerId: string | ObjectId) => {
    const query = this.volunteerRequestDAO.findByOwnerId(ownerId);
    this.populatePaginationRequests(query);
    return query.then((requests) => plainToInstance(VolunteerRequest, requests));
  };

  public getById = (id: string | ObjectId) => {
    const query = this.volunteerRequestDAO.findById(id);
    this.populateOwnerAndAssignees(query);
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

  public search = (phrase: string) => {
    const query = this.volunteerRequestDAO.search(phrase, volunteerRequestSearchFields);
    this.populatePaginationRequests(query);
    return query;
  };

  public addAssignee = (id: string | ObjectId, assigneeId: string | ObjectId) => {
    return this.volunteerRequestDAO.addAssignee(id, assigneeId);
  };

  public removeAssignee = (id: string | ObjectId, assigneeId: string | ObjectId) => {
    return this.volunteerRequestDAO.removeAssignee(id, assigneeId);
  };

  private convertDocumentsToInstances = (requests: LeanDocument<VolunteerRequestDocument>[] | LeanDocument<VolunteerRequestDocument>) => {
    return plainToInstance(VolunteerRequest, requests);
  };

  private populatePaginationRequests = (query: Query<any, any>) => {
    query.populate(propertyOf<VolunteerRequest>('owner'), ownerRequestProjection);
  };

  private populateOwnerAndAssignees = (query: Query<any, any>) => {
    query.populate(propertyOf<VolunteerRequest>('owner'), ownerRequestProjection);
    query.populate(propertyOf<VolunteerRequest>('assignees'), ownerRequestProjection);
  };
}
