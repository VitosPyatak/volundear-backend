import { VolunteerRequestModel } from './volunteer-request.schema';

export const volunteerRequestSearchFields: (keyof VolunteerRequestModel)[] = ['category', 'description', 'title'];
