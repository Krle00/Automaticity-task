import HomePage from "./POM/homePage"
import RegisterPage from "./POM/registerPage"

const homePage = new HomePage()
const registerPage = new RegisterPage()

describe('Automaticity_Test', () => {

  beforeEach(() =>{
    homePage.visitSite()
    homePage.clickSignInBtn()
    cy.wait(4000)
    homePage.clickCreateAccountBtn()
    cy.wait(4000)
  })

  let sharedEmail

  it('successful_registration', () => {

    sharedEmail = 'john' + Date.now() + '@abc.mail'

    registerPage.clickMrGender()
    registerPage.typeIntoFirstName('John')
    registerPage.typeIntoLastName('Johnson')
    registerPage.typeIntoEmail(sharedEmail)
    registerPage.typeIntoPassword('Y&&GFYhhgudhd8yaa')
    registerPage.typeIntoBirthday('01/01/2001')
    registerPage.clickOfferBox()
    registerPage.clickTermsBox()
    registerPage.clickNewsBox()
    registerPage.clickPrivacyBox()
    registerPage.clickCreateAccBtn()

  })

  it('empty_fields', () => {

    registerPage.elements.getIframe()
    registerPage.clickCreateAccBtn()

    cy.get('@iframebody').find('#field-firstname').then(($firstnamefield) => {
      expect($firstnamefield[0].checkValidity()).to.eq(false)
    })

  })

  it('used_email', () => {

    registerPage.clickMrsGender()
    registerPage.typeIntoFirstName('Nina')
    registerPage.typeIntoLastName('Smith')
    registerPage.typeIntoEmail(sharedEmail)
    registerPage.typeIntoPassword('e3e3JUG7&^Tf65ef')
    registerPage.clickOfferBox()
    registerPage.clickTermsBox()
    registerPage.clickNewsBox()
    registerPage.clickPrivacyBox()
    registerPage.clickCreateAccBtn()
    cy.wait(3000)
    registerPage.assertUsedEmail()

  })

  it('incorrect_email_format', () => {
    
    registerPage.clickMrGender()
    registerPage.typeIntoFirstName('Max')
    registerPage.typeIntoLastName('Petrovic')
    registerPage.typeIntoEmail('maxpetrovic7786.com')
    registerPage.typeIntoPassword('878h7g6f6de!')
    registerPage.clickOfferBox()
    registerPage.clickTermsBox()
    registerPage.clickNewsBox()
    registerPage.clickPrivacyBox()
    registerPage.clickCreateAccBtn()
    
    cy.get('@iframebody').find('#field-email').then(($emailfield) => {
      expect($emailfield[0].checkValidity()).to.eq(false)
    })

  })

  it('incorrect_password_format', () => {

    sharedEmail = 'john' + Date.now() + '@abc.mail'

    registerPage.clickMrsGender()
    registerPage.typeIntoFirstName('Olivia')
    registerPage.typeIntoLastName('Markovic')
    registerPage.typeIntoEmail(sharedEmail)
    registerPage.typeIntoPassword('abc')
    registerPage.clickOfferBox()
    registerPage.clickTermsBox()
    registerPage.clickNewsBox()
    registerPage.clickPrivacyBox()
    registerPage.clickCreateAccBtn()

    cy.get('@iframebody').find('#field-password').then(($passwordfield) => {
      expect($passwordfield[0].checkValidity()).to.eq(false)
    })

  })
})