import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import astroPlugin from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,astro}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      // Custom rules
      'no-unused-vars': 'off', // Disabled for Astro files (template expressions)
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-undef': 'off',
    },
  },
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,astro}'],
    ...prettierConfig,
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'pnpm-lock.yaml'],
  },
];
