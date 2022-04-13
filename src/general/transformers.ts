import { isValidObjectId } from 'mongoose';

export const transformObjectId = ({ obj, key }) => obj[key].toString();

export const transformToObjectIdOrModel = ({ obj, key }) => {
  if (isValidObjectId(obj[key])) return transformObjectId({ obj, key });
  return obj[key];
};
