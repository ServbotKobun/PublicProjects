const { defineConfig } = require("cypress");

module.exports = defineConfig({
 chromeWebSecurit: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
