
   const { join } = require('path')

   exports.config = {
       hostname: 'localhost',
       port: 4723,
     //  services: ['appium'],
       path: '/wd/hub',
       specs: [
           './test/specs/**/*.js'
       ],
       framework: 'mocha',
       featureFlags: {
       specFiltering: true
        },
       capabilities: [{
           "appium:platformName": "Android",
           "appium:platformVersion": "12.0",
           "appium:deviceName": "TestesDriver",
           "apppium:automationName": "UiAutomator2",
           "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
           "appium:app": join(process.cwd(), './app/android/webDriverio.apk')
       }],
   
       waitForTimeout: 40000,
       mochaOpts: {
           timeout: 500000
       }
   }