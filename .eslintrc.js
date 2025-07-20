module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'error',
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};