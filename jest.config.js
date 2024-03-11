const { compilerOptions } = require('./tsconfig.json')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  transform: { '.+\\.ts$': 'ts-jest' },
  testMatch: ["<rootDir>/tests/**/*.(spec|test).ts"],

  roots: ['<rootDir>/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: { '@/(.*)': '<rootDir>/src/$1' }
};