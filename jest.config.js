const { defaults } = require("jest-config");

module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!(foo|bar)/)", "/bar/"],
  preset: "ts-jest",
  testEnvironment: "node",
};
