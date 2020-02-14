// conf.js
exports.config = {
    framework: 'jasmine', // framework to use
    seleniumAddress: 'http://localhost:4444/wd/hub', // selenium server address
    specs: ['e2e/**/spec.js'], // test files to execute tests from 
    capabilities: {
        browserName: 'firefox'
    }
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }]
}