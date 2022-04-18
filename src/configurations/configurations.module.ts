import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationsManager } from './configurations.manager';

const getEnvironmentFileTag = () => {
  return process.env.NODE_ENV === 'production' ? '' : process.env.NODE_ENV;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${getEnvironmentFileTag()}`,
    }),
  ],
  providers: [ConfigurationsManager],
  exports: [ConfigurationsManager],
})
export class ConfigurationsModule {}
