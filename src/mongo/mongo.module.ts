import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationsManager } from 'configurations/configurations.manager';
import { ConfigurationsModule } from 'configurations/configurations.module';

export const MongoModule = MongooseModule.forRootAsync({
  imports: [ConfigurationsModule],
  inject: [ConfigurationsManager],
  useFactory: async ({ mongo: { query, user, password, port, host, database } }: ConfigurationsManager) => {
    const createDefaultConnectionString = () => {
      return `mongodb://${host}:${port}/${database}${query}`;
    };

    const createAuthConnectionString = () => {
      return `mongodb://${user}:${password}@${host}:${port}/${database}${query}`;
    };

    const createConnectionString = () => {
      return (user && password ? createAuthConnectionString : createDefaultConnectionString)();
    };

    return { uri: createConnectionString() };
  },
});
