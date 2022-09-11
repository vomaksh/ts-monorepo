import type { Config } from 'jest';
import { defaults } from 'jest-config';

/** @type {import('jest').Config} */
const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testMatch: defaults.testMatch,
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true
};

module.exports = config;
