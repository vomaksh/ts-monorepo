module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended', 
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    ignorePatterns: [
        "node_modules/",
        "dist/"
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error'
    },
};
