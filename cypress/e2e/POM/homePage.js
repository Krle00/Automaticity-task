class HomePage {
    elements = {
        getIframe: () => {
            cy.get('iframe').should('be.visible').then(($iframe) => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body).as('iframebody');
            });
        },
        getSignInBtn: () => cy.get('@iframebody').contains('Sign in'),
        getCreateAccountBtn: () => cy.get('@iframebody').find('[data-link-action="display-register-form"]'),
    }

    clickSignInBtn() {
        this.elements.getIframe()
        this.elements.getSignInBtn().click()
        this.elements.getIframe()
    }

    clickCreateAccountBtn() {
        this.elements.getIframe()
        this.elements.getCreateAccountBtn().click()
        this.elements.getIframe()
    }

    visitSite() {
        cy.visit('https://demo.prestashop.com/')
        cy.wait(11000)
    }

} export default HomePage