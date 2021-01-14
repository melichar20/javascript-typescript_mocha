const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('WebdriverIO API Action', function (){
    it('should hover on figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(3)
        assert.equal('name: user1', internetPage.getFigureDetailsText(3))
    })
    it('should send keyboard value', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeysToTarget('Backspace')
        assert.equal('You entered: BACK_SPACE', internetPage.getResultText())
    })
})