exports.config = {
    specs: [
        './test/specs/**/camera.injection.spec.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    port: 4723,
    path: '/wd/hub',
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://webcamtests.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}