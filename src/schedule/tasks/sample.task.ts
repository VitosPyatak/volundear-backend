import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ScheduledTask } from '../schedule.types';

@Injectable()
export class SampleTask implements ScheduledTask {
  constructor(private readonly logger: ConsoleLogger) {}

  public execute = () => {
    this.logger.verbose(`${SampleTask.name} - executed`);
  };
}
