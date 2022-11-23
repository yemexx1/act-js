import type { Config } from "@jest/types";
// Sync object
const jestConfig: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@aj/(.*)$": "<rootDir>/src/$1",
  },
  clearMocks: true,
  resetMocks: true,
  collectCoverageFrom: [
    "src/**",
    "!**/*.types.ts",
    "!**/*.constants.ts",
    "!src/index.ts",
  ],
  testLocationInResults: true,
  testResultsProcessor: "jest-sonar-reporter",
  testTimeout: 50000,
};
export default jestConfig;