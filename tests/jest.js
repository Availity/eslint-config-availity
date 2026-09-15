export default () => `
import { describe, test, expect } from '@jest/globals';

describe('example', () => {
  test('basic', () => {
    expect(true).toBe(true);
  });

  // jest/no-disabled-tests — should fire with .skip
  test.skip('skipped', () => {});

  // jest/no-focused-tests — should fire with .only
  test.only('focused', () => {
    expect(1).toBe(1);
  });
});
`;
