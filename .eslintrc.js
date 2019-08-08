module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'airbnb-base'
  ],
  // add your custom rules here
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
  },
  plugins: [
    'html',
  ],
}
