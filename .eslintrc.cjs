module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        "plugin:prettier/recommended",
        "prettier"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', "prettier"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                "printWidth": 120,
                "semi": false,
                "tabWidth": 4,
                "singleQuote": false,
                "trailingComma": "none"
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ]
    },
}
