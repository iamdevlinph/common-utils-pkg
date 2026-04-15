const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",
        parserOptions: {},

        globals: {
            window: true,
        },
    },

    extends: compat.extends("plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),

    plugins: {
        "simple-import-sort": simpleImportSort,
    },

    rules: {
        "@typescript-eslint/no-explicit-any": ["error", {
            ignoreRestArgs: true,
        }],

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
    },
}, globalIgnores(["**/lint-staged.config.js"]), {
    files: ["scripts/*.js"],

    rules: {
        "@typescript-eslint/no-var-requires": "off",
    },
}, globalIgnores(["lib/*", "docs/*", "coverage/*", "**/docusaurus.config.ts"])]);
