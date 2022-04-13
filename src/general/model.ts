import { instanceToPlain, Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { transformObjectId } from './transformers';

export class ClassModel {
  @Transform(transformObjectId) _id: ObjectId;

  public json() {
    return instanceToPlain(this);
  }
}
