require("chromedriver")
const fs = require("fs")
const { config } = require('../../config/wdio.conf');

describe('Face camera demo', () => {
    it('should be able to interact with face camera in website', async () => {
        const videoObject = fs.readFileSync("sample.mjpeg")
        const encoded = new Buffer.from(videoObject).toString("base64")
        await driver.pushFile(`/storage/emulated/0/Android/data/com.android.chrome/files/Download/sample.mjpeg`, encoded)

        await browser.pause(2000)
        await browser.url(config.baseUrl)
        await browser.pause(6000)
    });
});