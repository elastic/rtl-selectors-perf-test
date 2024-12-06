/** @type {import('jest').Config} **/

export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "@elastic/eui/es/(.*)?": "<rootDir>/node_modules/@elastic/eui/test-env/$1",
    "@elastic/eui$": "<rootDir>/node_modules/@elastic/eui/test-env",
  },
  transform: {
    "^.+\\.(js|ts|tsx|mjs)$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-typescript",
            { "preset-env": { modules: "commonjs" } },
          ],
        ],
        plugins: [
          "babel-plugin-transform-import-meta",
          "babel-plugin-explicit-exports-references",
        ],
      },
    ],
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@elastic/eui|uuid|react-dnd|dnd-core|@react-dnd|lodash-es)/)",
    "/node_modules/(?!(uuid|unist-util-visit|unist-util-visit-parents|unist-util-is)/)",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testTimeout: 500000,
};
