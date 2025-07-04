import os from 'os';

const base = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^vscode$': '<rootDir>/__mocks__/vscode.ts', // Ensure vscode is mocked
  },
  transform: {
    '^.+\\.m?tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/"
  ],
  testTimeout: 60000,
  maxWorkers: "50%",
  modulePaths: [
    "node_modules"
  ],
  setupFilesAfterEnv: [
    "jest-expect-message"
  ],
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!src/**/*.spec.ts',
    '!**/test/**',
  ]
}

export default base;
