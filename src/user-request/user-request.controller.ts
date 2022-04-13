import { Controller, Get, Query } from '@nestjs/common';
import { RecordsSearchParams } from 'general/dto';
import { UserRequestService } from './user-request.service';

@Controller('user-request')
export class UserRequestController {
  constructor(private readonly userRequestService: UserRequestService) {}

  @Get()
  public search(@Query() params: RecordsSearchParams) {
    return this.userRequestService.searchUsersAndVolunterRequests(params.search);
  }
}
