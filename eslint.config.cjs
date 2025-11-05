const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const astroParser = require('astro-eslint-parser');
const astroPlugin = require('eslint-plugin-astro');
const importPlugin = require('eslint-plugin-import');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: [
      'dist/',
      'node_modules/',
      'public/',
      '.astro/',
      '*.lock*',
      'README.md',
      'src/content/**/*.md',
      'src/content/**/*.mdx',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        URL: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
      globals: {
        URL: 'readonly',
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      'astro/no-conflict-set-directives': 'error',
    },
  },
  {
    files: ['**/*.md', '**/*.mdx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  prettierConfig,
];
