// require('ts-node/register');

// Read config file or use default one
const configFile = process.env.PROTRACTOR_TARGET_ENV || 'dev';
const fullFile = './config/' + configFile + '.js';
console.log('RS: Reading protractor env config from ' + fullFile);
const defaults = require(fullFile);
console.log('RS: Running protractor tests on host: ' + defaults.seleniumAddress);
console.log('RS: Tests connecting to: ' + defaults.baseUrl);
if (defaults.specs) {
    console.log('RS: Running only specs matching wildcard: ' + defaults.specs);
}

var specs = (defaults.specs !== undefined ? defaults.specs : ['features/**/*.feature']);
if (process.env.SPEC_OVERRIDE) {
    specs = process.env.SPEC_OVERRIDE.split(',');
    console.log('override specs: ', specs);
}

exports.config = {
    framework: 'jasmine', // framework to use
    seleniumAddress: defaults.seleniumAddress, // selenium server address
    specs: defaults.specs, // test files to execute tests from 
    baseUrl: defaults.baseUrl,
    params: defaults.params,
    capabilities: {
        browserName: 'chrome'
    }
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
}