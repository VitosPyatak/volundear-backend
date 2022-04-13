import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { PaginationParams } from 'general/dto';
import { UserRequestService } from 'user-request/user-request.service';
import { VolunteerRequest } from './volunteer-request';
import { CreateVolunteerRequestDTO } from './volunteer-request.dto';
import { VolunteerRequestService } from './volunteer-request.service';

@Controller('volunteer-request')
export class VolunteerRequestController {
  constructor(private readonly userRequestService: UserRequestService, private readonly volunteerRequestService: VolunteerRequestService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() body: CreateVolunteerRequestDTO) {
    return this.userRequestService.createRequestFromDTO(body);
  }

  @Get()
  public getPagination(@Query() paginationParams: PaginationParams) {
    return this.volunteerRequestService.getPaginationRequests(paginationParams).then(this.convertToDTO);
  }

  public convertToDTO = (requests: VolunteerRequest[]) => {
    return instanceToPlain(requests);
  };
}
