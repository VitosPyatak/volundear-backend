import { SchemaOptions } from '@nestjs/mongoose';

export const defaultSchemaOptions = (collection: string): SchemaOptions => ({
  collection,
  timestamps: true,
  versionKey: false,
  id: true,
  minimize: true,
});
