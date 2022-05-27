import { registerDecorator } from 'class-validator';
import { isValidObjectId } from 'mongoose';

export const IsObjectId = () => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isValidObjectId',
      target: object.constructor,
      propertyName,
      options: { message: 'Ivalid ObjectId passed' },
      validator: {
        validate: (value) => isValidObjectId(value),
      },
    });
  };
};
