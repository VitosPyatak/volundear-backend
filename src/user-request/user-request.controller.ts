import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecordByIdParams, RecordsSearchParams } from 'general/dto';
import { UserRequestService } from './user-request.service';

@Controller('user-request')
export class UserRequestController {
  constructor(private readonly userRequestService: UserRequestService) {}

  @Get()
  public search(@Query() params: RecordsSearchParams) {
    return this.userRequestService.searchUsersAndVolunterRequests(params.search);
  }

  @Get(':id')
  public getUserRequests(@Param() params: RecordByIdParams) {
    return this.userRequestService.getRequestsByOwnerId(params.id);
  }
}
