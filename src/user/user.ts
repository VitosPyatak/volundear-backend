import { VolunteerRequest } from 'volunteer-request/volunteer-request';
import { UserModel } from './user.schema';

export class User extends UserModel {
  requests: VolunteerRequest[];

  public setRequests(requests: VolunteerRequest[]) {
    this.requests = requests;
    return this;
  }
}
