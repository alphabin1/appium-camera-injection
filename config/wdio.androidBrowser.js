const { config } = require('./wdio.conf');

config.capabilities = [
    {
        maxInstances: 1,
        platformName: 'Android',
        "appium:platformVersion": '12',
        "appium:deviceName": 'emulator-5554',
        browserName: 'chrome',
        "appium:chromeOptions": {
            args: [
                'allow-file-access-from-files',
                'use-fake-device-for-media-stream',
                'use-file-for-fake-video-capture="/storage/emulated/0/Android/data/com.android.chrome/files/Download/sample.mjpeg"',
                'use-fake-ui-for-media-stream',
                'disable-translate',
                'no-process-singleton-dialog',
                'mute-audio',
            ]
}
    }
];

exports.config = config;