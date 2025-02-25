import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'plugin:prettier/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended'
		// - '@tanstack/query/exhaustive-deps': 'error',
		// - '@tanstack/query/stable-query-client': 'error',
		// - '@tanstack/query/no-rest-destructuring': 'warn'
	),
];

export default eslintConfig;
