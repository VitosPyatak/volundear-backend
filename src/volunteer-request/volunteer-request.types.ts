import { Document } from 'mongoose';
import { VolunteerRequestModel } from './volunteer-request.schema';

export type VolunteerRequestDocument = VolunteerRequestModel | Document;
