import { Type } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export class ConverterManager {
  static toInstance = (type: Type, data) => {
    return plainToInstance(type, JSON.parse(JSON.stringify(data)));
  };
}
