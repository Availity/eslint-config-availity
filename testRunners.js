/**
 * Named test runner configs for eslint-config-availity.
 *
 * Spread the appropriate export into your eslint.config.js alongside the base config:
 *
 *   import base, { withVitest } from 'eslint-config-availity';
 *   export default [...base, ...withVitest];
 *
 * Available exports: withJest, withVitest, withNodeTest
 */

import globals from 'globals';

const testFiles = ['**/*.test.*', '**/*.spec.*', '**/tests/**', '**/__tests__/**'];

// --- Jest ---

const resolveJest = async () => {
  try {
    const { createRequire } = await import('node:module');
    const require = createRequire(import.meta.url);
    const jestPkg = require('jest/package.json');
    const jestVersion = Number.parseInt(jestPkg.version.split('.', 1)[0], 10);
    const jestModule = await import('eslint-plugin-jest');
    const eslintPluginJest = jestModule.default;

    return [
      { ...eslintPluginJest.configs['flat/recommended'], files: testFiles },
      { files: testFiles, settings: { jest: { version: jestVersion } }, languageOptions: { globals: globals.jest } },
    ];
  } catch {
    return [];
  }
};

// --- Vitest ---

const resolveVitest = async () => {
  try {
    const vitestModule = await import('@vitest/eslint-plugin');
    const eslintPluginVitest = vitestModule.default;

    return [
      { ...eslintPluginVitest.configs.recommended, files: testFiles },
      { files: testFiles, languageOptions: { globals: globals.jest } },
    ];
  } catch {
    return [];
  }
};

// --- Node built-in test runner ---

const resolveNodeTest = async () => {
  try {
    const nodeTestModule = await import('eslint-node-test');
    const eslintPluginNodeTest = nodeTestModule.default;

    return [
      { ...eslintPluginNodeTest.configs.recommended, files: testFiles },
    ];
  } catch {
    return [];
  }
};

export const withJest = await resolveJest();
export const withVitest = await resolveVitest();
export const withNodeTest = await resolveNodeTest();
