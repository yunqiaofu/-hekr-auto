const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  roots: ['<rootDir>/test'],
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'src/auto/**.js',
    '!src/auto/index.js'
  ]
}
