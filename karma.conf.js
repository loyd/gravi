module.exports = config => config.set({
    frameworks: ['jasmine', 'source-map-support'],

    files: ['dist/*.umd.js'],

    autoWatch: false,

    reporters: ['dots'],

    //browsers: ['Chromium', 'Firefox'],
    //browsers: ['Firefox'],
    browsers: ['Chromium'],

    coverageReporter: {
        reporters: [
            {type: 'html'},
            {type: 'text'},
        ],
    },

    singleRun: true,
});
