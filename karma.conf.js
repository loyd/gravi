module.exports = config => config.set({
    frameworks: ['jasmine'],

    files: ['dist/*.umd.js'],

    autoWatch: false,

    reporters: ['dots'],

    //browsers: ['Chromium', 'Firefox'],
    browsers: ['Firefox'],

    coverageReporter: {
        reporters: [
            {type: 'html'},
            {type: 'text'},
        ],
    },

    singleRun: true,
});
