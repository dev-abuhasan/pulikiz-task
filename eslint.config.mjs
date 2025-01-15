import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/",
      "public/*.js",
      ".pnp.js",
      "**/public/sw.js",
      "**/public/workbox-*.js",
      "**/public/worker-*.js",
      "**/public/sw.js.map",
      "**/public/workbox-*.js.map",
      "**/public/worker-*.js.map",
    ],
    rules: {
      "prefer-const": "error",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
