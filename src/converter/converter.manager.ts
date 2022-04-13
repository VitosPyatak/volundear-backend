import { Type } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';

export class ConverterManager {
  static toInstance = (type: Type, data) => {
    return plainToInstance(type, JSON.parse(JSON.stringify(data)));
  };

  static toPlain = (data) => instanceToPlain(data);
}
