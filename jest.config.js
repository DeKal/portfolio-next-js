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
  collectCoverageFrom: [
    'src/views/**/*.js',
    'src/consts/**/*.js',
    'src/pages/**/*.js'
  ],
  moduleNameMapper: {
    '~/styles/(.*)': '<rootDir>/styles/$1',
    '~/(.*)': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
