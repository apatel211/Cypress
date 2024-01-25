const { defineConfig } = require("cypress");



module.exports = defineConfig({
  screenshotsFolder:"cypress/reports/mochareports/assets",
  projectId: '85xwyz',
  screenshotOnRunFailure: false,
  video: false,
  "reporter":"cypress-multi-reporters",
   "reporterOptions":{
    "reporterEnabled":"mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir":"cypress/reports/mocha",
      "quiet":true,
      "json":true,
      "html":false,
      "overwrite":false
    }
   }
,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
    //baseUrl:"https://www.google.com/"
    baseUrl:"https://react-redux.realworld.io/"
  },
});