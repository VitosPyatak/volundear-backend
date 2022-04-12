import { Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class ClassModel {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;
}
