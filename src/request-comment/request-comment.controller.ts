import { Controller, Get, Query } from '@nestjs/common';
import { CommentsRoomPaginationParams } from './request-comment.dto';
import { RequestCommentService } from './request-comment.service';

@Controller('request-comment')
export class RequestCommentController {
  constructor(private readonly commentsService: RequestCommentService) {}

  @Get()
  public commentsPagination(@Query() params: CommentsRoomPaginationParams) {
    return this.commentsService.getPaginationComments(params);
  }
}
