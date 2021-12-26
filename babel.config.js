module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          common: './src/Common',
          controller: './src/Controller',
          assets: './src/Assets',
          frontend: './src/Frontend'
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
