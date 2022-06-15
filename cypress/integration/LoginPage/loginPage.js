import { Given , And , Then , When } from "cypress-cucumber-preprocessor/steps";

import MainPageElements from '../PageObjects/mainpage.js'
import LoginPageElements from '../PageObjects/loginpage'
import loginpage from "../PageObjects/loginpage";

Given('Trendyol webpage up and work', () =>{
    cy.visit("/", {
        timeout: 5000,
        onBeforeLoad(win) {
            cy.stub(win.Notification, "requestPermission").resolves("denied")
        }
    })
    cy.get('.modal-close > svg').click()
})

When('User click Login button', () =>{
    MainPageElements.elements.MainPageLoginButton().click()
})

Then('Login page open successfully', () =>{
    cy.url().should("include", LoginPageElements.elements.LoginPageUrlElement())
})

Then('Login page title and subtitle shown successfully', () =>{
    LoginPageElements.elements.LoginPageMainTitle().should("have.text", LoginPageElements.elements.MainTitleText())
})

Then('Main title of login module shown successfully', () =>{
    LoginPageElements.elements.LoginPageMainTitle().should("be.visible")
    LoginPageElements.elements.LoginPageMainTitle().should("have.text", LoginPageElements.elements.MainTitleText())
})

Then('Sub title of login module shown successfully', () =>{
    LoginPageElements.elements.LoginPageSubTitle().should("be.visible")
    LoginPageElements.elements.LoginPageSubTitle().should("have.text", LoginPageElements.elements.SubTitleText())
})

Then('Giriş Yap button shown successfully', () =>{
    LoginPageElements.elements.HorizontalLoginMenuButton().should("be.visible")
})

Then('Üye Ol button shown successfully', () =>{
    LoginPageElements.elements.HorizontalSignInMenuButton().should("be.visible")
})

Then('E-Posta input field and its title shown successfully', () =>{
    LoginPageElements.elements.EMailTitle().should("be.visible")
    LoginPageElements.elements.EMailInputField().should("be.visible")
})

Then('Şifre input field and its titile shown successfully', () =>{
    LoginPageElements.elements.PasswordTitle().should("be.visible")
    LoginPageElements.elements.PasswordInputField().should("be.visible")
})

Then('Şifremi unuttum button shown successfully', () =>{
    LoginPageElements.elements.ForgotMyPasswordButton().should("be.visible")
})

Then('Giriş yap button shown successfully', () =>{
    LoginPageElements.elements.LoginButton().should("be.visible")
})

Then('Facebook ile giriş yap button shown successfully', () =>{
    LoginPageElements.elements.LoginWithFacebookButton().should("be.visible")
})

Then('Google ile giriş yap button shown successfully', () =>{
    LoginPageElements.elements.LoginWithGoogleButton().should("be.visible")
})

When('User Click Üye Ol button', () =>{
    LoginPageElements.elements.HorizontalSignInMenuButton().click()
})

Then('Üye ol tab is open and active', () =>{
    LoginPageElements.elements.HorizontalSignInMenuButton().should("have.class","active")
    cy.url().should("include",LoginPageElements.elements.SignUpPageWebPath())
})

Then('Signup page password field and its title shown successfully', () =>{
    LoginPageElements.elements.SignInPagePasswordTitle().should("have.text", LoginPageElements.elements.PasswordTitleText())
    LoginPageElements.elements.SignInPagePasswordField().should("be.visible")
})

Then('Signup page E-Posta input field and its title shown successfully', () =>{
    LoginPageElements.elements.SignInPageEMailTitle().should("have.text", LoginPageElements.elements.EMailTitleText())
    LoginPageElements.elements.SignInPageEMailField().should("be.visible")
})

Then('Password info text should be shown successfully', () =>{
    LoginPageElements.elements.SignInPasswordTypog().should("be.visible")
    LoginPageElements.elements.SignInPasswordTypog().should("have.text", LoginPageElements.elements.SingInPasswordTypogText())
})

Then('Gender Option should be shown successfully', () =>{
    LoginPageElements.elements.GenderTitle().should("be.visible")
    LoginPageElements.elements.GenderTitle().should("have.text", LoginPageElements.elements.GenderTitleText())
    LoginPageElements.elements.GenderMan().should("be.visible")
    LoginPageElements.elements.GenderMan().should("have.text", LoginPageElements.elements.GenderManText())
    LoginPageElements.elements.GenderWomen().should("be.visible")
    LoginPageElements.elements.GenderWomen().should("have.text", LoginPageElements.elements.GenderWomenText())
})

Then('SignUp button and inside text shown successfully', () => {
    LoginPageElements.elements.SignUpButton().should("be.visible")
    LoginPageElements.elements.SignUpButton().should("have.text", LoginPageElements.elements.SignUpButtonText())
})

Then('SignUp Button info text shown successfully', () =>{
    LoginPageElements.elements.SignUpButtonSubInfo().should("be.visible")
    LoginPageElements.elements.SignUpButtonSubInfo().contains(LoginPageElements.elements.SignUpButtonSubInfoText())
})

Then('SignUp Button info text has Üyelik Koşulları text underlined and its a link', () =>{
    LoginPageElements.elements.SignUpConditions().should("be.visible")
    LoginPageElements.elements.SignUpConditions().contains(LoginPageElements.elements.SignUpConditionsText())
    LoginPageElements.elements.SignUpConditions().trigger("mouseover")
})

Then('First Checkbox Input and its description text shown successfully', () =>{
    LoginPageElements.elements.FirstCheckBox().should("be.visible")
    LoginPageElements.elements.FirstCheckBoxTextField().should("be.visible")
    LoginPageElements.elements.FirstCheckBoxTextField().should("have.text", LoginPageElements.elements.FirstCheckBoxText())
})

Then('Second Checkbox Input and its description text shown successfully', () =>{
    LoginPageElements.elements.SecondCheckBox().should("be.visible")
    LoginPageElements.elements.SecondCheckBoxTextField().should("be.visible")
    LoginPageElements.elements.SecondCheckBoxTextField().contains(LoginPageElements.elements.SecondCheckBoxText())
})

Then('Facebook sign up button and its texts shown successfully', () =>{
    LoginPageElements.elements.SignUpMenuFacebokSignButton().should("be.visible")
    LoginPageElements.elements.SignUpMenuFacebookTextField().should("be.visible")
    LoginPageElements.elements.SignUpMenuFacebookTextField().should("have.text", LoginPageElements.elements.SignUpMenuFacebookText())
    LoginPageElements.elements.SignUpMenuFacebookSmallTextField().should("be.visible")
    LoginPageElements.elements.SignUpMenuFacebookSmallTextField().should("have.text", LoginPageElements.elements.SignUpMenuSmallText())
})

Then('Google sign up button and its texts shown successfully', () =>{
    LoginPageElements.elements.SignUpMenuGoogleSignButton().should("be.visible")
    LoginPageElements.elements.SignUpMenuGoogleTextField().should("be.visible")
    LoginPageElements.elements.SignUpMenuGoogleTextField().should("have.text", LoginPageElements.elements.SignUpMenuGoogleText())
    LoginPageElements.elements.SignUpMenuGoogleSmallTextField().should("be.visible")
    LoginPageElements.elements.SignUpMenuGoogleSmallTextField().should("have.text", LoginPageElements.elements.SignUpMenuSmallText())
})

When('User Click Giris Yap button', () =>{
    LoginPageElements.elements.HorizontalLoginMenuButton().click()
})

When('User clicks Şifremi unutttum button', () =>{
    LoginPageElements.elements.ForgotMyPasswordButton().click()
})

Then('Şifremi Unuttum trendyol webpage opens successfully', () =>{
    cy.url().should("include", LoginPageElements.elements.ForgotMyPasswordUlrElement())
})

When('User clicks login button of Login menu', () =>{
    LoginPageElements.elements.LoginButton().click()
})

Then('Error Message of valid e-mail shown successfully', () =>{
    LoginPageElements.elements.LoginPageValidEmailErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageValidEmailErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageValidEmailErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageValidEmailErrorTextField().should("have.text", LoginPageElements.elements.LoginPageValidEmailErrorText()) 
})

When('User enters {string} to e-mail input field', (emailinput) =>{
    LoginPageElements.elements.EMailInputField().type(emailinput, {force: true})
})

Then('Error Message of password shown successfully', () => {
    LoginPageElements.elements.LoginPagePasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPagePasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPagePasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPagePasswordErrorTextField().should("have.text", LoginPageElements.elements.LoginPagePasswordErrorText()) 
})

When('User enters {string} to password input field', (passwordinput) =>{
    LoginPageElements.elements.PasswordInputField().type(passwordinput, {force: true})
})

Then('Error Message of password or e-mail shown successfully', () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.LoginPageEMailORPasswordErrorText()) 
})

Then('Input fields of E-Posta and Şifre should be cleared', () =>{
    LoginPageElements.elements.EMailInputField().should("have.value", "")
    LoginPageElements.elements.PasswordInputField().should("have.value","")
})

Then('Suggestion as {string} shown successfully', (suggestion) =>{
    LoginPageElements.elements.EMailInputField().click(310,16, { force: true})
    cy.get('.password > .q-input-wrapper > .q-label').click("center", { force: true })
    LoginPageElements.elements.EMailInputField().should("have.value", suggestion)
})

When('User clicks show password button inside right hand side of password input field', () =>{
    LoginPageElements.elements.EyeCloseButton().click()
})

Then('Password shown successfully', () =>{
    LoginPageElements.elements.PasswordInputField().invoke("attr","type").should("eq","text")
})

Then('Password hide successfully', () =>{
    LoginPageElements.elements.PasswordInputField().invoke("attr","type").should("eq","password")
})

Then('Password hide-shown button type changed as {string} type', (eye_status) =>{
    if (eye_status == "open"){
        LoginPageElements.elements.EyeOpenButton().should("be.visible")
    }
    else if (eye_status == "closed") {
        LoginPageElements.elements.EyeCloseButton().should("be.visible")
    }
})

When('User goes back to previous page via back button', () =>{
    cy.go("back")
})

When('User clicks {string} option of gender changing menus', (gender_selection) =>{
    if (gender_selection == "male") {
        LoginPageElements.elements.GenderMan().click()
    }
    else if (gender_selection == "female") {
        LoginPageElements.elements.GenderWomen().click()
    }
})

Then('{string} section active and selected', (gender_status) =>{
    if (gender_status == "male") {
        LoginPageElements.elements.SignUpGenderMaleActiveClass().should("be.visible")
        LoginPageElements.elements.SignUpGenderFemaleGrayClas().should("be.visible")
    }
    else if (gender_status == "female") {
        LoginPageElements.elements.SignUpGenderFemaleActiveClass().should("be.visible")
        LoginPageElements.elements.SignUpGenderMaleGrayClass().should("be.visible")
    }
})

When('User click ÜyelikKoşulları link', () =>{
    LoginPageElements.elements.SignUpConditions().click()
})

Then('Üyelik koşulları pop up opens successfully', () =>{
    LoginPageElements.elements.ContactPopUp().should("be.visible")
    LoginPageElements.elements.ContactPopUpMembershipArrangement().should("be.visible")
    LoginPageElements.elements.ContactPopUpMembershipArrangement().should("have.text", LoginPageElements.elements.ContactPopUpMembershipArrangementText())
    LoginPageElements.elements.ContactPopUpMembershipArrangement().invoke("attr", "class").should("eq","item active")
    LoginPageElements.elements.ContactPopUpLightningTextField().should("be.visible")
    LoginPageElements.elements.ContactPopUpLightningTextField().should("have.text", LoginPageElements.elements.ContactPopUpLightningText())
})

When('User click X button at top-right of the pop-up', () =>{
    LoginPageElements.elements.ContactPopUpCloseButton().click()
})

Then('Contact Text pop up closed successfully', () =>{
    LoginPageElements.elements.ContactPopUp().should("not.exist")
})

When('User click somewhere else insted of pop-up inside website', () =>{
    LoginPageElements.elements.SignUpPopupsNonPlaceFields().click(100,50, { force: true })
})

When('User click Aydınlatma metni link', () =>{
    LoginPageElements.elements.SingUpLightningTextButton().click()
})

Then('Aydınlatma metni pop up opens successfully', () =>{
    LoginPageElements.elements.ContactPopUp().should("be.visible")
    LoginPageElements.elements.ContactPopUpMembershipArrangement().should("be.visible")
    LoginPageElements.elements.ContactPopUpMembershipArrangement().should("have.text", LoginPageElements.elements.ContactPopUpMembershipArrangementText())
    LoginPageElements.elements.ContactPopUpLightningTextField().should("be.visible")
    LoginPageElements.elements.ContactPopUpLightningTextField().should("have.text", LoginPageElements.elements.ContactPopUpLightningText())
    LoginPageElements.elements.ContactPopUpLightningTextField().invoke("attr", "class").should("eq","item active")
})

When('User click first checkbox below Üye Ol button', () =>{
    LoginPageElements.elements.FirstCheckBox().click({force: true})
})

Then('First Check Box become active and selected', () =>{
    LoginPageElements.elements.SingUpFirstCheckBox().invoke("attr", "value").should("eq","true")
})

Then('First Check Box become passive and unselected', () =>{
    LoginPageElements.elements.SingUpFirstCheckBox().invoke("attr", "value").should("eq","false")
})

When('User click second checkbox below Üye Ol button', () =>{
    LoginPageElements.elements.SecondCheckBox().click({force: true})
})

Then('Second Check Box become active and selected', () =>{
    LoginPageElements.elements.SignUpSecondCheckBox().invoke("attr", "value").should("eq","true")
})

Then('Second Check Box become passive and unselected', () =>{
    LoginPageElements.elements.SignUpSecondCheckBox().invoke("attr", "value").should("eq","false")
})

When('User Click Üye Ol button below e-mail and password input fields', () =>{
    LoginPageElements.elements.SignUpButton().click()
})

Then('Error mesage of e-mail and password should be shown', () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.EMailandPasswordErrorMessage()) 
})

When('User enters {string} info e-Posta input field', (e_mail) =>{
    LoginPageElements.elements.SignInPageEMailField().type(e_mail, { force: true })
})

Then('Error mesage of e-mail should be shown', () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.EMailErrorMessage()) 
})

When('User enters {string} info password input field', (password) =>{
    LoginPageElements.elements.SignInPagePasswordField().type(password, { force: true })
})

Then('Error mesage of password should be between 7 and 15 should be shown' , () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.PasswordBetween7and15ErrorMessage()) 
})

Then('Error mesage of password should contain at least 1 letter shown successfully', () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.PasswordShouldContainLetterMessage()) 
})

Then('Error mesage of password should contain at least 1 number shown successfully', () =>{
    LoginPageElements.elements.LoginPageEMailORPasswordErrorField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorWarningLogo().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("be.visible")
    LoginPageElements.elements.LoginPageEMailORPasswordErrorTextField().should("have.text", LoginPageElements.elements.PasswordShouldContainNumberMessage()) 
})

Then('Progress bar shown successfully below password field', () =>{
    LoginPageElements.elements.SingUpPageProgressBar().should("be.visible")
})

Then('Password power indicator shown successfully below password input field and shows its a weak password', () =>{
    LoginPageElements.elements.SignUpPasswordPowerTextField().should("be.visible")
    LoginPageElements.elements.SignUpPasswordPowerTextField().should("have.text", LoginPageElements.elements.SignUpPasswordPowerWeakPasswordText())
})

Then('Password power indicator shown successfully below password input field and shows its a strong password', () =>{
    LoginPageElements.elements.SignUpPasswordPowerTextField().should("be.visible")
    LoginPageElements.elements.SignUpPasswordPowerTextField().should("have.text", LoginPageElements.elements.SignUpPasswordPowerStrongPasswordText())
})

Then('Second Checkbox become red', () =>{
    LoginPageElements.elements.RedPersonalCheckBoxField().should("be.visible")
})

Then('E Mail verification pop up shown successfully', () =>{
    LoginPageElements.elements.EMailVerifyModalPopUp().should("be.visible")
})
