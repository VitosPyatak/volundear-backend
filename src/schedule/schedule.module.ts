import { ConsoleLogger, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { SampleTask } from './tasks/sample.task';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [ScheduleService, ConsoleLogger, SampleTask],
  exports: [ScheduleService],
})
export class ScheduleTaskModule {}
