import { expect, describe, it } from 'vitest';
import { calculateDiscountedTotal } from './task3';

describe('calculateDiscountedTotal', () => {
  it('should calculate discounted total', () => {
    expect(calculateDiscountedTotal(100, "premium", "WELCOME10")).toEqual(80);
  });

  // Add your tests here
});