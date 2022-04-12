import { Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class ClassModel {
  @Transform(({ obj, key }) => obj[key].toString()) _id: ObjectId;
}
