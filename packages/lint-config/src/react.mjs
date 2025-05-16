import baseConfig from './base.mjs'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  ...baseConfig,
  {
    files: ['**/*.{tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
]
