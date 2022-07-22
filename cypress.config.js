const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kt3vvx",
  viewportWidth: 1400,
  viewportHeight: 900,
  e2e: {
   "baseUrl": "https://bioid.qa.cloud.bionexo.com.br/users/sign_in"
    },
});
