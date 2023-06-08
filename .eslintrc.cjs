module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:css-import-order/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', 'css-import-order'],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 1,
    'react/button-has-type': 0,
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'no-console': 1,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', ['sibling', 'index'], 'object'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '.*/**/*.svg',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: '.*/**/*.css',
            group: 'object',
            position: 'after',
          },
          {
            pattern: '.*/**/*.scss',
            group: 'object',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
  },
};
