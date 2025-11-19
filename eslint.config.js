import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parserTs,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      vue,
    },
    rules: {
      ...prettier.rules,

      // Vue 3 recommended
      ...vue.configs['vue3-recommended'].rules,

      // TS
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Наши послабления
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'no-console': 'warn',
    },
  },
]
