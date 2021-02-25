const ProtractorImageComparison = require('protractor-image-comparison');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test.js'],

  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    chromeOptions: {
      args: ['--window-size=1280,1024', '--disable-browser-side-navigation'],
      w3c: false,
    },
    //marionette : true, => your connection is not private dans chrome
    //acceptInsecureCerts : true, => your connection is not private chrome
  },

  onPrepare() {
    browser.protractorImageComparison = new ProtractorImageComparison(
      {
        baselineFolder: 'screenshots/',
        screenshotPath: 'screenshots/',
        autoSaveBaseline: true,
        ignoreAntialiasing: true,
      },
    );
  },

};


/*

chrome:

    capabilities: {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      chromeOptions: {
        args: ['--window-size=1280,1024', '--disable-browser-side-navigation'],
        w3c: false,
      },


firefox:

    gui: {
      capabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: ['--window-size=1280,1024'],
        },
      },
    },
    
    headless: {
      capabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: ['--headless', '--window-size=1280,1024'],
        },
      },
    },
  },

*/