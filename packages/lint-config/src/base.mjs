import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...importPlugin.flatConfigs.typescript.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Built-in imports (come from NodeJS native) go first
            'external', // <- External imports
            'internal', // <- Absolute imports
            ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
            'index', // <- index imports
            'unknown', // <- unknown
          ],
          'newlines-between': 'always',
          alphabetize: {
            /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
            order: 'asc',
            /* ignore case. Options: [true, false] */
            caseInsensitive: true,
          },
        },
      ],
    },
  },
)
