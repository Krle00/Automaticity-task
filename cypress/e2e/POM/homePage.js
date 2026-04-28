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
        getLorem: () => cy.get('@iframebody').contains('Lorem ipsum')
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
        cy.intercept('GET', '**/module/productcomments/CommentGrade*').as('pageLoad1')
        cy.visit('https://demo.prestashop.com/')
        cy.wait('@pageLoad1', { timeout: 15000 })
    }

    assertSuccessfulReg() {
        cy.wait(3000)
        this.elements.getIframe()
        cy.wait(3000)
        this.elements.getLorem().should('be.visible')
    }

} export default HomePage