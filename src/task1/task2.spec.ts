import { expect, describe, it } from 'vitest';
import { sortNumbers } from './task2';

describe('sortNumbers', () => {
  it('should sort an array of numbers', () => {
    expect(sortNumbers([3, 1, 2])).toStrictEqual([1, 2, 3]);
  });

  // Add your tests here
});