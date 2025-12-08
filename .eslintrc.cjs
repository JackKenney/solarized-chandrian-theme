module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es6: true,
  },
  ignorePatterns: ["demo/screenshottable/*.*"],
  rules: {
    "prettier/prettier": "warn",
  },
  plugins: ["prettier"],
};
