const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "",
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1366,
  viewportHeight: 768,
});