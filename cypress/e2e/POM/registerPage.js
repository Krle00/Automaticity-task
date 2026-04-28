class RegisterPage {
    elements = {
        getIframe: () => {
            cy.get('iframe').should('be.visible').then(($iframe) => {
                const $body = $iframe.contents().find('body');
                cy.wrap($body).as('iframebody');
            });
        },
        getMrGender: () => cy.get('@iframebody').find('#field-id_gender_1'),
        getMrsGender: () => cy.get('@iframebody').find('#field-id_gender_2'),
        getNameField: () => cy.get('@iframebody').find('#field-firstname'),
        getLastNameField: () => cy.get('@iframebody').find('#field-lastname'),
        getEmailField: () => cy.get('@iframebody').find('#field-email'),
        getPasswordField: () => cy.get('@iframebody').find('#field-password'),
        getBirthdayField: () => cy.get('@iframebody').find('#field-birthday'),
        getOfferBox: () => cy.get('@iframebody').find('#field-optin'),
        getTermsBox: () => cy.get('@iframebody').find('#field-psgdpr'),
        getNewsBox: () => cy.get('@iframebody').find('#field-newsletter'),
        getPrivacyBox: () => cy.get('@iframebody').find('#field-customer_privacy'),
        getCreateAccBtn: () => cy.get('@iframebody').find('[data-link-action="save-customer"]'),
        getUsedEmailMsg: () => cy.get('@iframebody').find('.alert-danger'),

    }

    typeIntoFirstName(firstname) {
        this.elements.getIframe()
        this.elements.getNameField().type(firstname)
        this.elements.getIframe()
    }

    typeIntoLastName(lastname) {
        this.elements.getIframe()
        this.elements.getLastNameField().type(lastname)
        this.elements.getIframe()
    }

    typeIntoEmail(email) {
        this.elements.getIframe()
        this.elements.getEmailField().type(email)
        this.elements.getIframe()
    }

    typeIntoPassword(password) {
        this.elements.getIframe()
        this.elements.getPasswordField().type(password)
        this.elements.getIframe()
    }

    typeIntoBirthday(birthday) {
        this.elements.getIframe()
        this.elements.getBirthdayField().type(birthday)
        this.elements.getIframe()
    }

    clickMrGender() {
        this.elements.getIframe()
        this.elements.getMrGender().click()
        this.elements.getIframe()
    }
    
    clickMrsGender() {
        this.elements.getIframe()
        this.elements.getMrsGender().click()
        this.elements.getIframe()
    }

    clickOfferBox() {
        this.elements.getIframe()
        this.elements.getOfferBox().click()
        this.elements.getIframe()
    }

    clickTermsBox() {
        this.elements.getIframe()
        this.elements.getTermsBox().click()
        this.elements.getIframe()
    }

    clickNewsBox () {
        this.elements.getIframe()
        this.elements.getNewsBox().click()
        this.elements.getIframe()
    }

    clickPrivacyBox () {
        this.elements.getIframe()
        this.elements.getPrivacyBox().click()
        this.elements.getIframe()
    }

    clickCreateAccBtn () {
        this.elements.getIframe()
        this.elements.getCreateAccBtn().click()
        this.elements.getIframe()
    }

    assertUsedEmail () {
        this.elements.getIframe()
        this.elements.getUsedEmailMsg().should('be.visible')
        this.elements.getIframe()
    }

    waitForPageLoad() {
        cy.wait(2000)
    }


} export default RegisterPage