import { expect, describe, it } from 'vitest';
import { validateUserSignup } from './task2';

describe('validateUserSignup', () => {
  it('should validate user signup', () => {
    expect(validateUserSignup('username', 'john@doe.com', '12345678abc', 30)).toBe('Signup successful');
  });

  // Add your tests here
});