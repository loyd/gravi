module.exports = config => config.set({
    frameworks: ['jasmine'],

    files: ['dist/*.umd.js'],

    autoWatch: false,

    reporters: ['dots'],

    browsers: ['ChromiumHeadless', 'FirefoxHeadless'],

    coverageReporter: {
        reporters: [
            {type: 'html'},
            {type: 'text'},
        ],
    },

    singleRun: true,
});
