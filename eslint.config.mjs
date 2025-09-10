import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prettier/prettier": "error"
    }
  }
];
