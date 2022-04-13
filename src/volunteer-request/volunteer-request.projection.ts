import { propertyOf } from 'utils/propertyOf';
import { VolunteerRequest } from './volunteer-request';

export const volunteerRequestManyPaginationProjection = {
  [propertyOf<VolunteerRequest>('_id')]: 1,
  [propertyOf<VolunteerRequest>('category')]: 1,
  [propertyOf<VolunteerRequest>('owner')]: 1,
  [propertyOf<VolunteerRequest>('title')]: 1,
};
