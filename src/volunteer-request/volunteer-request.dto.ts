import { IsEnum, IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'decorators/is-objectid/is-objectid.decorator';
import { VolunteerRequest } from './volunteer-request';
import { VolunteerRequestCategory } from './volunteer-request.types';

export class CreateVolunteerRequestDTO implements Partial<VolunteerRequest> {
  @IsNotEmpty() title: string;

  @IsNotEmpty() description: string;

  @IsObjectId() owner: string;

  @IsEnum(VolunteerRequestCategory) category: VolunteerRequestCategory;
}
