import { mockOptions } from '../../../mockData';

/**
 * 
 */
export const findMatches = (string) => {
  return mockOptions.filter(option => option.includes(string));
};
