import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { PaginationParams, RecordByIdParams } from 'general/dto';
import { UserRequestService } from 'user-request/user-request.service';
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
    return this.volunteerRequestService.getPaginationRequests(paginationParams);
  }

  @Get(':id')
  public getRequest(@Param() params: RecordByIdParams) {
    return this.volunteerRequestService.getById(params.id);
  }

  @Put(':id/assignee/add')
  public addAssignee(@Param() params: RecordByIdParams, @Body() body: RecordByIdParams) {
    return this.volunteerRequestService.addAssignee(params.id, body.id);
  }

  @Put(':id/assignee/remove')
  public removeAssignee(@Param() params: RecordByIdParams, @Body() body: RecordByIdParams) {
    return this.volunteerRequestService.removeAssignee(params.id, body.id);
  }
}
