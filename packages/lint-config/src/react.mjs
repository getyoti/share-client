import baseConfig from './base.mjs'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    files: ['**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
]
