import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestCommentDAO } from 'request-comment/request-comment.dao';
import { CommentsGateway } from 'request-comment/request-comment.gateway';
import { requestCommentModelDefinition } from 'request-comment/request-comment.schema';
import { RequestCommentService } from 'request-comment/request-comment.service';

@Module({
  imports: [MongooseModule.forFeature([requestCommentModelDefinition])],
  providers: [CommentsGateway, RequestCommentService, RequestCommentDAO],
  exports: [RequestCommentService],
})
export class EventsModule {}
