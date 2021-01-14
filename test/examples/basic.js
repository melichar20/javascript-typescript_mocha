const internetPage = require("../pageobjects/internet.page")

describe('The Internet Page', () => {
    it('should have the right title', () => {
        browser.url('https://the-internet.herokuapp.com')
        expect(browser).toHaveTitle('The Internet');

        internetPage.getLiText();
        internetPage.getSpecificElementText(3);
    })
    it("is footer displayed", () => {
        console.log(internetPage.pageFooter.isDisplayed());
    })
    it('does the header exist?', () => {
        console.log(internetPage.pageHeader.isExisting());
    })
    it('is footer in viewport', () => {
        console.log(internetPage.pageFooter.isDisplayedInViewport());
    })
    it('click first link', () => {
        internetPage.clickOnLink()
    })
})