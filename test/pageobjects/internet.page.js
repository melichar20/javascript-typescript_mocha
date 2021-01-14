class Internet {
    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2')}
    get h3Header() { return $('h3')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get childElements() { return this.parent.$$('li')}
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)}
    get firstLink() { return $('ul li:nth-child(1) a')}
    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`)} 
    link(index) { return $(`ul li:nth-child(${index}) a`)}
    get username() { return $('#username')}
    get password() { return $('#password')}
    figures(index){ return $(`.example .figure:nth-child(${index}) img`)}
    figureDetails(index){ return $(`.example .figure:nth-child(${index}) .figcaption h5`)}
    get target() { return $(`.example #target`)}
    get result() { return $(`.example #result`)}




/**
 * Clicks on the link based on the index provided
 * @param {Number} index the index of the element
 */
    clickLink(index){
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed();
        return this.specificChildElement(index).getText();
    }

    clickOnLink() {
        if(this.firstLink.isDisplayed()) {
            this.firstLink.click()
        }
        this.h3Header.waitForDisplayed()
    }

    clickCheckbox(index) {
        this.checkboxes(index).waitForDisplayed();
        this.checkboxes(index).click();
    }

    enterLogin(user, pass){
        this.username.waitForDisplayed()
        this.username.setValue(user)
        this.password.setValue(pass)        
    }

    hoverOnFigure(index){
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1,1)
    }

    getFigureDetailsText(index){
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }

    clickTarget(){
        this.target.waitForDisplayed()
        this.target.click()
    }

    sendKeysToTarget(text){
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    getResultText(){
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    scrollToPageFooter(){
        this.pageFooter.scrollIntoView()
    }

}

module.exports = new Internet();