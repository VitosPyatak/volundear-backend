import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserRequestService } from 'user-request/user-request.service';
import { CreateVolunteerRequestDTO } from './volunteer-request.dto';

@Controller('volunteer-request')
export class VolunteerRequestController {
  constructor(private readonly userRequestService: UserRequestService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() body: CreateVolunteerRequestDTO) {
    return this.userRequestService.createRequestFromDTO(body);
  }
}
