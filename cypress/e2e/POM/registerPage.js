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

        this.elements.getNameField().type(firstname)
        this.elements.getIframe()
    }

    typeIntoLastName(lastname) {
        this.elements.getLastNameField().type(lastname)
    }

    typeIntoEmail(email) {
        this.elements.getEmailField().type(email)
    }

    typeIntoPassword(password) {
        this.elements.getPasswordField().type(password)
    }

    typeIntoBirthday(birthday) {
        this.elements.getBirthdayField().type(birthday)
    }

    clickMrGender() {
        this.elements.getIframe()
        this.elements.getMrGender().click()
    }
    
    clickMrsGender() {
        this.elements.getIframe()
        this.elements.getMrsGender().click()
    }

    clickOfferBox() {
        this.elements.getOfferBox().click()
    }

    clickTermsBox() {
        this.elements.getTermsBox().click()
    }

    clickNewsBox () {
        this.elements.getNewsBox().click()
    }

    clickPrivacyBox () {
        this.elements.getPrivacyBox().click()
    }

    clickCreateAccBtn () {
        this.elements.getCreateAccBtn().click()
    }

    assertUsedEmail () {
        this.elements.getIframe()
        this.elements.getUsedEmailMsg().should('be.visible')
    }

    waitForPageLoad() {
        cy.wait(2000)
    }


} export default RegisterPage