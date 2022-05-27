import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from 'decorators/is-objectid/is-objectid.decorator';
import { PaginationParams } from 'general/dto';
import { RequestCommentModel } from './request-comment.schema';

export class CommentSentDTO implements Partial<RequestCommentModel> {
  @IsNotEmpty() text: string;

  @IsObjectId() sender: string;

  @IsObjectId() request: string;
}

export class UserJoinedRoomDTO implements Partial<RequestCommentModel> {
  @IsObjectId() request: string;
}

export class CommentsRoomPaginationParams extends PaginationParams {
  @IsObjectId() request: string;
}
