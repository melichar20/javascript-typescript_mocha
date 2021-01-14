const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Scroll to Element', function (){
    it('should scroll to the footer', () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed()
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
})