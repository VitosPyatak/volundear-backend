import { plainToInstance } from 'class-transformer';
import { LeanDocument } from 'mongoose';
import { VolunteerRequest } from './volunteer-request';
import { VolunteerRequestDocument } from './volunteer-request.types';

export class VolunteerRequestManager {
  static toClasses = (requests: LeanDocument<VolunteerRequestDocument>[]) => plainToInstance(VolunteerRequest, requests);
}
