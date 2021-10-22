import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    await driver.sleep(2000);

});
test('I place "X" in cell 0', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    
    await driver.sleep(2000);

});

test('I place "X" in cell 6', async () => {

    let button = await (await driver).findElement(By.id('cell-6'));
    await button.click();
    
    await driver.sleep(2000)

});

test('I place "X" in cell 4', async () => {

    let button = await (await driver).findElement(By.id('cell-4'));
    await button.click();
    
    await driver.sleep(2000)

});

test('I place "X" in cell 8', async () => {

    let button = await (await driver).findElement(By.id('cell-8'));
    await button.click();
    
    await driver.sleep(2000)
    
});