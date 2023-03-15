# Mobile UI Automation Project Setup:

- Based on
  - WebdriverIO
  - Node version 14.0 or higher
  - Appium


- Setup and Start Appium server
  - Install the appium server using the below command on terminal

    ```
    npm i -g appium
    ```

  - Execute the below command to start the appium server locally

    ```
    appium
    ```

    *Note : If a Chrome driver version mismatch error message appears. By using this argument, restart the appium.*

    ```
    appium --allow-insecure chromedriver_autodownload
    ```

- Setup code
  
  - Clone the repo
    ```
    git clone https://github.com/alphabin-01/demo-camera-injection
    ```

  - Install all dependencies using the below command
    ```
    npm install
    ```

- Run the test
  ```
  npm run androidBrowser
  ```
