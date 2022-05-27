import { Document } from 'mongoose';
import { RequestCommentModel } from './request-comment.schema';

export type RequestCommentDocument = RequestCommentModel & Document;
