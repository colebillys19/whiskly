import { mockOptions } from '../../../mockData';

/**
 * findMatches
 * @description takes a string and returns a filtered mockOptions array containing only the
 *              options that contain the string
 */
export const findMatches = (string) => {
  return mockOptions.filter(option => option.toLowerCase().includes(string.toLowerCase()));
};
