export default () => `
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

describe('example', () => {
  test('basic', () => {
    assert.equal(true, true);
  });

  // node-test/no-only-test — should fire with .only
  test.only('focused', () => {
    assert.equal(1, 1);
  });
});
`;
