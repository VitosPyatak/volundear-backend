import { NestExpressApplication } from '@nestjs/platform-express';
import { TestingModule } from '@nestjs/testing';

export type TestInstance = {
  app: NestExpressApplication;
  module: TestingModule;
};
