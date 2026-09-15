export default () => `
import { describe, test, expect } from 'vitest';

describe('example', () => {
  test('basic', () => {
    expect(true).toBe(true);
  });

  // vitest/no-disabled-tests — should fire with .skip
  test.skip('skipped', () => {});

  // vitest/no-focused-tests — should fire with .only
  test.only('focused', () => {
    expect(1).toBe(1);
  });
});
`;
