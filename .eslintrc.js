module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['simple-import-sort'], // for automatic sorting of imports
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/no-explicit-any': [
      // do not allow any
      'error',
      {
        ignoreRestArgs: true, // allows any for rest
      },
    ],
    // 'no-duplicate-imports': 'error', // might delete or change since deprecated already
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/CHANGELOG.md#version-600-2020-11-15
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['lint-staged.config.js'], // ignore all js files for now
  overrides: [
    {
      files: ['scripts/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  globals: {
    window: true,
  },
};
