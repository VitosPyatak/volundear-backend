import { DocumentTimestamps } from 'general/mongoose.types';
import { propertyOf } from 'utils/propertyOf';
import { VolunteerRequest } from './volunteer-request';

export const volunteerRequestManyPaginationProjection = {
  [propertyOf<VolunteerRequest>('_id')]: 1,
  [propertyOf<VolunteerRequest>('category')]: 1,
  [propertyOf<VolunteerRequest>('owner')]: 1,
  [propertyOf<VolunteerRequest>('title')]: 1,
  [propertyOf<VolunteerRequest>('status')]: 1,
  [propertyOf<VolunteerRequest>('description')]: 1,
  [propertyOf<DocumentTimestamps>('createdAt')]: 1,
};
