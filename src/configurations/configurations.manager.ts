import { Injectable } from '@nestjs/common';
import { variableNames } from './configurations.configs';

@Injectable()
export class ConfigurationsManager {
  public get app() {
    return {
      port: process.env[variableNames.app.port],
    };
  }

  public get mongo() {
    return {
      port: process.env[variableNames.mongo.port],
      host: process.env[variableNames.mongo.host],
      user: process.env[variableNames.mongo.user],
      password: process.env[variableNames.mongo.password],
      query: process.env[variableNames.mongo.query],
      database: process.env[variableNames.mongo.database],
    };
  }
}
