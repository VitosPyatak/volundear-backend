import { signs } from 'configurations/configurations.configs';
import { FilterQuery } from 'mongoose';

const createQueryRegexMatchingField = (field: string, phrase: string): FilterQuery<Document> => ({
  [field]: { $regex: phrase, $options: 'i' },
});

export const createBasicSearchQuery = (phrase: string, fields: string[]) => {
  const splittedPhrase = phrase.split(signs.whitespace);
  return splittedPhrase
    .filter((subphrase) => subphrase.length)
    .flatMap((subphrase) => fields.map((field) => createQueryRegexMatchingField(field, subphrase)));
};
