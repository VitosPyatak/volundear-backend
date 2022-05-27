import { getConnectionToken } from '@nestjs/mongoose';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Test } from '@nestjs/testing';
import { ConfigurationsModule } from 'configurations/configurations.module';
import { MongoModule } from 'mongo/mongo.module';
import { Connection } from 'mongoose';
import { TestInstance } from './types';

export const createTestInstance = (...modules): Promise<TestInstance> => {
  return Test.createTestingModule({
    imports: [ConfigurationsModule, MongoModule, ...modules],
  })
    .compile()
    .then(async (module) => {
      const app = await module.createNestApplication<NestExpressApplication>();
      return { app, module };
    });
};

export const closeTestApplication = async (application: NestExpressApplication) => {
  await (application.get(getConnectionToken()) as Connection).db.dropDatabase();
  await application.close();
};
