const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  video:true,
  screenshotOnRunFailure:true,
  //retries:1,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
      reportFilename: "[status]_[datetime]-report",
      //timestamp: "longDate",
      charts: true,
      reportTitle: 'cypress Automation Exeution Report',
      embeddedScreenshots: true,
      inlineAssest: true,
      saveAllAttempts: false,
      /* ignoreVideos: false,
      videoOnFailOnly: false */
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
