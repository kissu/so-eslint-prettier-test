module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended', // this line was updated
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
