import { fixupConfigRules } from '@eslint/compat';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import { compat } from './compat.js';

// Detect test runner and include appropriate plugin scoped to test files
const testFiles = ['**/*.test.*', '**/*.spec.*', '**/tests/**', '**/__tests__/**'];
const testRunnerConfigs = [];

try {
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  const jestPkg = require('jest/package.json');
  const jestVersion = Number.parseInt(jestPkg.version.split('.', 1)[0], 10);
  const jestModule = await import('eslint-plugin-jest');
  const eslintPluginJest = jestModule.default;
  testRunnerConfigs.push(
    { ...eslintPluginJest.configs['flat/recommended'], files: testFiles },
    { files: testFiles, settings: { jest: { version: jestVersion } }, languageOptions: { globals: globals.jest } }
  );
} catch {
  try {
    const vitestModule = await import('@vitest/eslint-plugin');
    const eslintPluginVitest = vitestModule.default;
    testRunnerConfigs.push(
      { ...eslintPluginVitest.configs.recommended, files: testFiles },
      { files: testFiles, languageOptions: { globals: globals.jest } }
    );
  } catch {
    // Neither jest nor vitest detected — no test runner rules
  }
}

// Shared plugins and rule overrides (no airbnb-base)
export const baseRules = [
  eslintPluginPromise.configs['flat/recommended'],
  ...testRunnerConfigs,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    name: 'availity/base',
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      strict: 'off',
      'no-var': 'error',
      'no-shadow': 'off',
      'no-param-reassign': 'off',
      'no-restricted-syntax': 'off',
      'global-require': 'off',
      'class-methods-use-this': 'off',
      'default-param-last': 'warn',
      'unicorn/filename-case': 'off',
      'unicorn/no-empty-file': 'warn',
      'unicorn/empty-brace-spaces': 'off',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/numeric-separators-style': ['error', { onlyIfContainsSeparator: true }],
      'unicorn/no-nested-ternary': 'off',
      'unicorn/prefer-math-trunc': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/prefer-includes': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-string-replace-all': 'warn',
      'unicorn/prefer-at': 'warn',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-spread': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': ['error', 'ignorePackages', { js: 'always', mjs: 'always', ts: 'always' }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'no-underscore-dangle': 'off',
      'promise/avoid-new': 'off',
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
    },
  },
];

// Full base config includes airbnb-base (for Node/CLI consumers)
// eslint-config-airbnb-base is a direct dependency because compat.extends resolves it by name
const config = [
  ...fixupConfigRules(compat.extends('airbnb-base')),
  ...baseRules,
];

// Shared TypeScript config — used by both base and browser profiles
const tsConfigs = [];

// Lint ts/tsx only if typescript-eslint is available
try {
  const { default: tseslint } = await import('typescript-eslint');

  tsConfigs.push(
    ...tseslint.configs.recommended.map((c) => ({
      ...c,
      files: ['**/*.{ts,tsx}'],
    })),
    {
      name: 'availity/typescript',
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      },
    },
  );

  config.push(...tsConfigs);
} catch (error) {
  if (error.code !== 'ERR_MODULE_NOT_FOUND' && error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }
}

export { tsConfigs };

config.push(eslintConfigPrettier);

export default config;
