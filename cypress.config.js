const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("task", {
                sleep: async (time) => {
                    await new Promise(resolve => {
                        setTimeout(resolve, time)
                    });
                    return null;
                }
            });
            return config;
        },
        env: {
            BASE_URL: "",
            EMAIL: "",
            PASSWORD: ""
        },
        screenshotsFolder: "cypress/cypress-tests"
    },
});
