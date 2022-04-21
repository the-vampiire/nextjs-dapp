module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  env: {
    es6: true,
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "coverage",
    ".eslintrc.js",
    "next.config.js",
  ],
  plugins: [
    "import",
    "eslint-comments",
    "eslint-plugin-newline-destructuring"
  ],
  extends: [
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  globals: {
    BigInt: true,
    console: true,
    WebAssembly: true,
  },
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "src/pages"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always", prev: "*", next: "return"
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        allowWholeFile: true,
      },
    ],
    "eslint-comments/no-unused-disable": "warn",
    "jest/valid-title": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "ignore",
          caseInsensitive: false
        },
      },
    ],
    "newline-destructuring/newline": [
      "error",
      {
        items: 2,
      }
    ],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "=": "none"
        }
      }
    ],
    "no-multi-spaces": "error",
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2
    ]
  },
};
