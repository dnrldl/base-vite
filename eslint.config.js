import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

// prettier-ignore
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,                     // js 기본 문법 오류, 코드 품질 검사
      tseslint.configs.recommended,               // ts parser 활성화
      reactHooks.configs['recommended-latest'],   // react hook 사용 위반 검사
      reactRefresh.configs.vite,                  // 핫 리로드 규칙 (vite 보조)
    ],
    languageOptions: {                            // window, document, fetch 등을 전역 객체로 인식
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // 미사용 변수 방지
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/order': ['warn', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': { 'order': 'asc' }
      }],
      // 'import/order': 'warn', // import 순서 일관성
      // 'react/self-closing-comp': 'warn', // <img></img> 대신 <img />
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],

    },
  },
]);
