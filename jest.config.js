module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json',
      diagnostics: false
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['utils/**/*.js', 'views/**/*.js'],
  testResultsProcessor: './node_modules/jest-junit-reporter',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
