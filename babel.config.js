module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@designSystem': './src/designSystem',
          '@screens': './src/screens',
          '@utils': './src/utils/',
          '@actions': './src/state/actions/',
          '@app-types': './src/state/types/',
          '@services': './src/state/services/',
          '@selectors': './src/state/selectors/',
          '@__mocks__': './src/__mocks__/',
        },
      },
    ],
  ],
};
