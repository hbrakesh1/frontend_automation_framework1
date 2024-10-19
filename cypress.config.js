const {defineConfig} = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'customer-report',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: true,
        reportFilename: "[status]_[datetime]-[name]-report",
        timestamp: "longDate",
        reportDir: "cypress/cypress-tests/reports/html",
        reportTitle: "customer-report",
        showSkipped: true,
        showHooks: "always",
    },
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
            require('cypress-terminal-report/src/installLogsPrinter')(on, {
                printLogsToConsole: "always"
            });
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
        env: {
            BASE_URL: "",
            EMAIL: "",
            PASSWORD: ""
        },
        screenshotsFolder: "cypress/cypress-tests/screenshots",
        videosFolder: "cypress/cypress-tests/videos",
        video: true,
    },
});
