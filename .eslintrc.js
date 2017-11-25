module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: [
    'standard'
  ],
  // add your custom rules here
  'rules': {
    camelcase: 0, // for same as db table field purpose, this repo use underscore style variable.
    'no-unused-expressions': 0 // for mocha chai testing
  }
}
