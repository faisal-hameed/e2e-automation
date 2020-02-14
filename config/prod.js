
var testSuite = 'e2e/**/*spec.js';

module.exports = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://juliemr.github.io/protractor-demo/',
  specs: [testSuite], // TODO: remove this when all tests are working
  tags: '~@skip',

  params: {
    browserWaitTimeoutMs: 15000
  },

  prepare: {
    userEmail: 'demouser@gmail.com',
    userPass: 'testpassword',
  }
};
