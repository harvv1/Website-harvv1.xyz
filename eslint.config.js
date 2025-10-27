import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	{
		ignores: ['dist/', 'node_modules/', '**/*.d.ts', 'coverage/'],
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.json'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
		],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['**/*.js', '**/*.mjs', '**/*.json'],
		//   extends: [tseslint.configs.disableTypeChecked],
		languageOptions: {
			globals: {
				SomeGlobalVariable: true,
			},
		},
	},
	eslintConfigPrettier, // Disables ESLint rules that conflict with Prettier
);
