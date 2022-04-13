import { Module } from '@nestjs/common';
import { EventsModule } from 'events/events.module';
import { RequestCommentModule } from 'request-comment/request-comment.module';
import { UserRequestModule } from 'user-request/user-request.module';
import { AppService } from './app.service';
import { HttpRequestModule } from './http-request/http-request.module';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';

@Module({
  imports: [ScheduleTaskModule, MongoModule, HttpRequestModule, EventsModule, UserRequestModule, RequestCommentModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
