import { describe, expect, it } from 'vitest';
import { isValidEmail } from './task4';

describe('parseDate', () => {
  it('should detect a valid email', () => {
    expect(isValidEmail('john@doe.com')).toEqual(true);
  });

  // Add your tests here
});