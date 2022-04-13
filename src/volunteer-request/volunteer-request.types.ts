import { Document } from 'mongoose';
import { VolunteerRequestModel } from './volunteer-request.schema';

export type VolunteerRequestDocument = VolunteerRequestModel & Document;

export enum VolunteerRequestStatus {
  active = 'active',
  closed = 'closed',
  onHold = 'onHold',
}

export enum VolunteerRequestCategory {
  military = 'military',
  transportation = 'transportation',
  animals = 'animals',
  other = 'other',
}
