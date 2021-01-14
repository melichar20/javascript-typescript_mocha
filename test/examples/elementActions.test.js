const { assert } = require("chai");
const internetPage = require("../pageobjects/internet.page");

describe('Test element actions', function() {
    it('it should click element', () => {
        browser.url('/')
        internetPage.clickOnLink();
        expect(browser.getUrl()).toEqual('https://the-internet.herokuapp.com/abtest');
    })
    it('should get text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).toEqual('A/B Testing');
    })
    it('should click checkbox', () => {
        internetPage.clickLink(6);
        internetPage.clickCheckbox(1);
        expect(internetPage.checkboxes(1).isSelected()).toEqual(true);
    })
    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1);
        expect(internetPage.checkboxes(1).isSelected()).toEqual(false);
    })
    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterLogin('mark', 'pass');
        assert.equal('mark', internetPage.username.getValue());
        expect(internetPage.username.getValue()).toEqual('mark');
    })
})
