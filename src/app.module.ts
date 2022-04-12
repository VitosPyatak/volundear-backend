import { Module } from '@nestjs/common';
import { UserController } from 'user/user.controller';
import { AppService } from './app.service';
import { HttpRequestModule } from './http-request/http-request.module';
import { MongoModule } from './mongo/mongo.module';
import { ScheduleTaskModule } from './schedule/schedule.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ScheduleTaskModule, MongoModule, HttpRequestModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
