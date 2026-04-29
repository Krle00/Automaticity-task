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
        getRegAssert: () => cy.get('@iframebody').contains('John Johnson')
    }

    clickSignInBtn() {
        this.elements.getIframe()
        this.elements.getSignInBtn().click()
    }

    clickCreateAccountBtn() {
        this.elements.getIframe()
        this.elements.getCreateAccountBtn().click()
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
        this.elements.getRegAssert().should('be.visible')
    }

} export default HomePage