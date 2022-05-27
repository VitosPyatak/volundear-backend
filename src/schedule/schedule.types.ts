export interface ScheduledTask {
  execute(): Promise<void> | void;
}
