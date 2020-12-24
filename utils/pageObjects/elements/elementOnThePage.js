const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');


class elementOnThePage {
    constructor (browser, selector) {
        this.element = browser.findElement(By.css(selector));
    }

    click() {
        return this.element.click();
    }

    getText() {
        return this.element.getText();
    }

    sendKeys(value) {
        return this.element.sendKeys(value);
    }
}

module.exports = elementOnThePage;