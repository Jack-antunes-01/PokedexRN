module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@enum': './src/enum',
          '@data': './src/data',
          '@components': './src/components',
          '@navigator': './src/navigator',
          '@themes': './src/global/themes',
          '@routes': './src/routes',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
