
## Frameworks
1. Protractor with Jasmin

### Tutorials
1. https://www.protractortest.org/#/tutorial
2. https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber

## Prerequisits
1. Node (for installing packages)
2. Java (for Selenium Server)

## Getting started with Testing

Run `npm install` to install the dependencies  

Run `webdriver-manager update` to download required selenium artifacts  
Run `webdriver-manager start` to start selenium

or   

Run `rpm run setup` to setup and start selenium

## Running E2Es
Run `protractor protractor.conf.js` to run all matching E2Es

### Envirnoment variables
- PROTRACTOR_TARGET_ENV
- SPEC_OVERRIDE

#### Important files

- protractor.conf.js  
Global configuration for protractor framework
- e2e/spec.js  
Test files to execute E2E tests


[Test Scripts] < ------------ > [Selenium Server] < ------------ > [Browser Drivers]