//The Applitools Eyes Cypress SDK is a simple plugin to 
//Cypress. Once installed, it adds few commands to the 
//main cy object. Specifically, it adds three main methods, 
//cy.eyesOpen to start the test, cy.eyesCheckWindow to take 
//screenshots (for each test step) and cy.eyesClose to 
//close the test.


module.exports = {
    testConcurrency: 1,
    apiKey: 'APPLITOOLS_API_KEY',
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 700, height: 500, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Ultrafast Batch'
}
