import { Injectable } from '@nestjs/common';
import { ConverterManager } from 'converter/converter.manager';
import { LeanDocument, Query } from 'mongoose';
import { propertyOf } from 'utils/propertyOf';
import { RequestComment } from './request-comment';
import { RequestCommentDAO } from './request-comment.dao';
import { CommentSentDTO, CommentsRoomPaginationParams } from './request-comment.dto';
import { RequestCommentModel } from './request-comment.schema';
import { RequestCommentDocument } from './request-comment.types';

@Injectable()
export class RequestCommentService {
  constructor(private readonly requestCommentDAO: RequestCommentDAO) {}

  public createFromDTO = (dto: CommentSentDTO) => {
    const comment = ConverterManager.toPlain(dto);
    return this.requestCommentDAO.createOne(comment);
  };

  public getPaginationComments = ({ limit, page, request }: CommentsRoomPaginationParams) => {
    const query = this.requestCommentDAO.findManyByRequestId(request, { limit, skip: page });
    query.populate(propertyOf<RequestCommentModel>('sender'));
    return query.then(this.convertToInstance);
  };

  private convertToInstance = (comments: LeanDocument<RequestCommentDocument> | LeanDocument<RequestCommentDocument>[]) => {
    return ConverterManager.toInstance(RequestComment, comments);
  };
}
