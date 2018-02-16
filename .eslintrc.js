module.exports = {
  root: true,
  extends: ['standard', 'plugin:vue/recommended'],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never']
  },
  globals: { expect: true }
}
