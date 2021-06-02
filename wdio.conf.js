exports.config = {
  runner: 'local',
  specs: [
    './test/**/*.js'
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://notarize.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
  }]],
  framework: 'jasmine',
  jasmineOpts: {
    defaultTimeoutInterval: 60000
  }
}