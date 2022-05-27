import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestCommentController } from './request-comment.controller';
import { RequestCommentDAO } from './request-comment.dao';
import { requestCommentModelDefinition } from './request-comment.schema';
import { RequestCommentService } from './request-comment.service';

@Module({
  imports: [MongooseModule.forFeature([requestCommentModelDefinition])],
  providers: [RequestCommentService, RequestCommentDAO],
  exports: [RequestCommentService],
  controllers: [RequestCommentController],
})
export class RequestCommentModule {}
