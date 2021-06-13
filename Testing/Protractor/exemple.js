//----------   conf.js   --------------------------

exports.config = {
    specs: ['scenario.js'],
    onPrepare() {},
    beforeLaunch: () => {},
    afterLaunch: () => {},
    framework: 'jasmine2',
    jasmineNodeOpts: {
      defaultTimeoutInterval: 420000,
    },
    capabilities: {
        browserName: 'firefox'
    },
    params: {
        login: {
            user: 'abc',
            password: '123'
        }
    },
};


//---------   scenario.js   ---------------------------

describe('titre', function() {

    it('should ... ', function() {
        browser.waitForAngularEnabled(false);   // appli non Angular
        browser.get(url);
        //browser.params.login.user
    });

});


// commandes : protractor conf.js --params.login.user=John --params.login.password=1234
