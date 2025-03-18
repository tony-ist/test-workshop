import { expect, describe, it } from 'vitest';
import { parseDate } from './task3';

describe('parseDate', () => {
  it('should parse a date', () => {
    expect(parseDate('2025-03-18')).toEqual(new Date(2025, 2, 18, 1, 0, 0));
  });

  // Add your tests here
});