class homePage {

    getYourFeed(){return 'Your Feed'}
    getGlobalFeed(){return 'Global Feed'}
    getHome(){return 'Home'}
    getNewPost(){return 'New Post'}
    getSettings(){return 'Settings'}

    checkGlobalFeedIsVisible(){
        cy.contains(this.getGlobalFeed()).should('be.visible')
    }

    clickSettings(){
        cy.contains(this.getSettings()).click()
    }

}

export default homePage