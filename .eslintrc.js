module.exports = {
  root: false,
  extends: '@react-native-community', 'plugin:prettier/recommended', 'prettier',

  plugins: ['react', 'react-native', "prettier", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    'react-native/style-sheet-object-names': [
      'EStyleSheet',
      'OtherStyleSheet',
      'PStyleSheet',
    ],

  },

  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    // indent: [2, 2],
    // "prettier/prettier": "error",

  },
  overrides: [
    {
      files: ['*.js'],
      rules: { 'react/jsx-handler-names': 0 },
    },
  ],
  // 'prettier/prettier': ['error', {singleQuote: true, parser: 'flow'}],
};
