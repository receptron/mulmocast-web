import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import sonarjs from "eslint-plugin-sonarjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsconfigRootDir = __dirname;
const mainTsconfig = path.resolve(tsconfigRootDir, "tsconfig.worker.json");

// Common base rules configuration
const baseRules = {
  "prettier/prettier": "error",
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",
  indent: ["error", 2],
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^__",
      varsIgnorePattern: "^__",
      caughtErrorsIgnorePattern: "^__",
    },
  ],
  "linebreak-style": ["error", "unix"],
  quotes: "off",
  semi: ["error", "always"],
  "sonarjs/no-alphabetical-sort": "off",
};

const basePlugins = {
  "@typescript-eslint": typescript,
  prettier,
};

const baseLanguageOptions = {
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};

const sonarjsRules = {
  "sonarjs/no-commented-code": "off",
  "sonarjs/cognitive-complexity": "off",
  "sonarjs/no-unused-vars": "off", // duplicate base rule
  "sonarjs/todo-tag": "off",
  "sonarjs/no-nested-conditional": "off",
  "sonarjs/slow-regex": "warn",
  "sonarjs/prefer-regexp-exec": "off",
};

export default [
  js.configs.recommended,
  sonarjs.configs.recommended,
  {
    ignores: ["node_modules/**", ".vite/**", "dist/**", "client/components/ui/**"],
  },
  // Node.js environment configuration (Main & Preload)
  {
    files: ["server/**/*.{js,ts}"],
    languageOptions: {
      ...baseLanguageOptions,
      parserOptions: {
        ...baseLanguageOptions.parserOptions,
        project: [mainTsconfig],
        tsconfigRootDir,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      ...basePlugins,
    },
    rules: {
      ...typescript.configs["recommended-type-checked"].rules,
      ...baseRules,
      ...sonarjsRules,
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/require-await": "off",
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  // Vue configuration (Client process)
  {
    files: ["client/**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
        Buffer: "readonly",
      },
    },
    plugins: {
      ...basePlugins,
      vue,
    },
    rules: {
      ...vue.configs["flat/recommended"].rules,
      ...typescript.configs.recommended.rules,
      ...baseRules,
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/require-explicit-emits": "error",
      "vue/valid-define-emits": "error",
      "vue/no-unused-refs": "error",
      "vue/no-unused-vars": "error",

      "vue/no-useless-v-bind": "error",
      "vue/no-mutating-props": "error",

      ...sonarjsRules,
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  // TypeScript files in Client process
  {
    files: ["client/**/*.{js,ts}"],
    languageOptions: {
      ...baseLanguageOptions,
      globals: {
        ...globals.browser,
        Buffer: "readonly",
      },
    },
    plugins: {
      ...basePlugins,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...baseRules,
      ...sonarjsRules,
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  // Build configuration files
  {
    files: ["*.config.{js,ts,mjs}"],
    languageOptions: {
      ...baseLanguageOptions,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      ...basePlugins,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...baseRules,
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  prettierConfig,
];
