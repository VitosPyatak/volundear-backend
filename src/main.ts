import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { validationPipeOptions } from './app.configs';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.use(compression());
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
})();
