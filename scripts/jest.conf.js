const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  roots: ['<rootDir>/test/'],
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
    'src/**.js'
  ]
}
