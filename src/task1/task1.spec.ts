import { expect, describe, it } from 'vitest';
import { reverseString } from './task1';

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  // Add your tests here
});