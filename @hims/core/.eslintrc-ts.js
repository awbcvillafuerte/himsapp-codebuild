const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier', 'redux-saga', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
		// Disabled Rules
		'@typescript-eslint/camelcase': ['error', { properties: 'never' }],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-require-imports': 'off',
		// '@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		// Enabled rules
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/semi': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',

    complexity: ['error', { max: 15 }],
    'max-depth': ['error', { max: 4 }],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: true,
			},
		],
  },
  settings: {
    react: {
			version: 'detect',
		},
    'import/resolver': {
      "node": {
        "extensions": [
          ".ts",
          ".tsx",
        ]
      }
    },
  },
};
