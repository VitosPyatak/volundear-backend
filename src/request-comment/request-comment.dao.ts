import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DAOQueryOptions } from 'general/mongoose.types';
import { Model, ObjectId } from 'mongoose';
import { RequestCommentModel } from './request-comment.schema';
import { RequestCommentDocument } from './request-comment.types';

@Injectable()
export class RequestCommentDAO {
  constructor(@InjectModel(RequestCommentModel.name) private readonly requestCommentDAO: Model<RequestCommentDocument>) {}

  public createOne = (document) => {
    return this.requestCommentDAO.create(document);
  };

  public findManyByRequestId = (request: string | ObjectId, options?: DAOQueryOptions) => {
    return this.requestCommentDAO.find({ request }, options?.projection, { skip: options.skip, limit: options.limit }).lean();
  };
}
