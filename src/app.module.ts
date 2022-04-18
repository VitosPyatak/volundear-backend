import { Module } from '@nestjs/common';
import { ConfigurationsModule } from 'configurations/configurations.module';
import { EventsModule } from 'events/events.module';
import { RequestCommentModule } from 'request-comment/request-comment.module';
import { UserRequestModule } from 'user-request/user-request.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';

@Module({
  imports: [
    ConfigurationsModule,
    ScheduleTaskModule,
    MongoModule,
    HttpRequestModule,
    EventsModule,
    UserRequestModule,
    RequestCommentModule,
  ],
})
export class AppModule {}
