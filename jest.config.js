module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-redux|react-native-vector-icons)/)',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@designSystem(.*)$': '<rootDir>/src/designSystem$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@actions(.*)$': '<rootDir>/src/state/actions$1',
    '^@app-types(.*)$': '<rootDir>/src/state/types$1',
    '^@services(.*)$': '<rootDir>/src/state/services$1',
    '^@selectors(.*)$': '<rootDir>/src/state/selectors$1',
    '^@__mocks__(.*)$': '<rootDir>/src/__mocks__$1',
  },
  // add __DEV__ to globals
  globals: {
    __DEV__: true,
  },
};
