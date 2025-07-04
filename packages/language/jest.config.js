import base from "./jest.config.base.mjs"

const { transform , moduleNameMapper, setupFilesAfterEnv, preset ,maxWorkers, testEnvironment, modulePaths, extensionsToTreatAsEsm } = base;

const config = {
  transform,
  moduleNameMapper,
  setupFilesAfterEnv,
  preset,
  maxWorkers,
  testEnvironment,
  extensionsToTreatAsEsm,
  modulePaths: ["<rootDir>/src", ...modulePaths],
  roots: ["<rootDir>/test"],
}

export default config;
