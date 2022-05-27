import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { SampleTask } from './tasks/sample.task';

@Injectable()
export class ScheduleService {
  constructor(private readonly sampleTask: SampleTask) {}

  @Cron('45 * * * * *')
  public handleCron() {
    this.sampleTask.execute();
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  public handleCronExpression() {
    this.sampleTask.execute();
  }

  @Interval(100000)
  public handleTimeoutTask() {
    this.sampleTask.execute();
  }
}
