import { IsEnum, IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'decorators/is-objectid/is-objectid.decorator';
import { VolunteerRequestCategory } from 'user/user.types';
import { VolunteerRequest } from './volunteer-request';

export class CreateVolunteerRequestDTO implements Partial<VolunteerRequest> {
  @IsNotEmpty() title: string;

  @IsNotEmpty() description: string;

  @IsObjectId() owner: string;

  @IsEnum(VolunteerRequestCategory) category: VolunteerRequestCategory;
}
