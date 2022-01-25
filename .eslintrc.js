module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb-base',
  ],

  plugins: ['react', 'react-native', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // env: {
  //   'react-native/react-native': true,
  // },
  settings: {
    'react-native/style-sheet-object-names': [
      'EStyleSheet',
      'OtherStyleSheet',
      'PStyleSheet',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },

  },

  rules: {
    // 'max-len': [1, 1200, 2, { ignoreComments: true }],
    // "omitLastInOneLineBlock": "always",
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    indent: [2, 2],
    'space-in-parens': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'prettier/prettier': 'error',
    // 'import/resolver': 'web/pack',
    'react/prop-types': 0,
    'global-require': 0,

  },
  overrides: [
    {
      files: ['*.js'],
      rules: { 'react/jsx-handler-names': 0 },
    },
  ],
  // 'prettier/prettier': ['error', {singleQuote: true, parser: 'flow'}],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
};
