class LoginPageElements {
    elements = {
        LoginPageUrlElement: () => "/giris?",
        LoginPageMainTitle: () => cy.get("#login-register > div.lr-title > h1"),
        LoginPageSubTitle: () => cy.get('#login-register > div.lr-title > h3'),
        MainTitleText: () => "Merhaba,",
        SubTitleText: () => "Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!",
        HorizontalLoginMenuButton: () => cy.get('button.q-secondary.q-button-medium.q-button.tab.button.mr-5.left'),
        HorizontalSignInMenuButton: () => cy.get('button.q-secondary.q-button-medium.q-button.tab.button.right'),
        EMailTitle: () => cy.get('div.q-input-wrapper.email-input > label'),
        EMailInputField: () => cy.get('div.q-input-wrapper.email-input > #login-email'),
        PasswordTitle: () => cy.get('div.password-wrapper > div > div > label'),
        PasswordInputField: () => cy.get('#login-password-input'),
        EyeCloseButton: () => cy.get('#login-register > div.lr-container > div.q-layout.login > form > div.password-wrapper > div > i'),
        EyeOpenButton: () => cy.get('.i-eye-open'),
        ForgotMyPasswordButton: () => cy.get('#login-register > div.lr-container > div.q-layout.login > form > div.forgot-password > a > span'),
        LoginButton: () => cy.get('#login-register > div.lr-container > div.q-layout.login > form > button'),
        LoginWithFacebookButton: () => cy.get('#login-register > div.lr-container > div.social-account-login-buttons > div:nth-child(1)'),
        LoginWithGoogleButton: () => cy.get('#login-register > div.lr-container > div.social-account-login-buttons > div:nth-child(2)'),
        SignInPagePasswordTitle: () => cy.get('.password > .q-input-wrapper > .q-label'),
        SignInPagePasswordField: () => cy.get('#register-password-input'),
        SignInPageEMailTitle: () => cy.get('.email-input > .q-label'),
        SignInPageEMailField: () => cy.get('[data-testid="email-input"]'),
        EMailTitleText: () => "E-Posta",
        PasswordTitleText: () => "Şifre",
        SignUpPageWebPath: () => "/uyelik?",
        SignInPasswordTypog: () => cy.get('.q-typography'),
        SingInPasswordTypogText: () => "Şifreniz en az 7 karakter olmalı, harf ve rakam içermelidir.",
        GenderTitle: () => cy.get('.gender > label'),
        GenderTitleText: () => "Cinsiyet (Opsiyonel)",
        GenderWomen: () => cy.get('.female'),
        GenderWomenText: () => "Kadın",
        GenderMan: () => cy.get('.male'),
        GenderManText: () => "Erkek",
        SignUpButton: () => cy.get('[data-testid="submit-button"]'),
        SignUpButtonText: () => "Üye Ol",
        SignUpButtonSubInfo: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.contract.flex > p'),
        SignUpButtonSubInfoText: () => "Üye Ol’a basarak ",
        SignUpConditions: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.contract.flex > p > b'),
        SignUpConditionsText: () => "Üyelik Koşulları",
        FirstCheckBox: () => cy.get('.marketing-checkbox > .ty-flex-column > .ty-checkbox-wrapper'),
        FirstCheckBoxTextField: () => cy.get('.marketing-checkbox > .ty-flex-column > .ty-checkbox-wrapper > .ty-text'),
        FirstCheckBoxText: () => "Kampanyalardan haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum.",
        SecondCheckBox: () => cy.get('.personal-checkbox > .ty-flex-column > .ty-checkbox-wrapper'),
        SecondCheckBoxTextField: () => cy.get('.ty-text > div'),
        SecondCheckBoxText: () => "Kişisel verilerimin işlenmesine yönelik ",
        SignUpMenuFacebokSignButton: () => cy.get('.social-account-login-buttons > :nth-child(1)'),
        SignUpMenuFacebookTextField: () => cy.get(':nth-child(1) > .flex > :nth-child(1) > div'),
        SignUpMenuFacebookText: () => "facebook",
        SignUpMenuFacebookSmallTextField: () => cy.get(':nth-child(1) > .flex > :nth-child(1) > small'),
        SignUpMenuSmallText: () => "ile kaydol",
        SignUpMenuGoogleSignButton: () => cy.get('.social-account-login-buttons > :nth-child(2)'),
        SignUpMenuGoogleTextField: () => cy.get(':nth-child(2) > .flex > :nth-child(1) > div'),
        SignUpMenuGoogleText: () => "google",
        SignUpMenuGoogleSmallTextField: () => cy.get(':nth-child(2) > .flex > :nth-child(1) > small'),
        ForgotMyPasswordUlrElement: () => "/sifremiunuttum",
        LoginPageValidEmailErrorField: () => cy.get('#error-box-wrapper'),
        LoginPageValidEmailErrorWarningLogo: () => cy.get('.i-warning'),
        LoginPageValidEmailErrorTextField: () => cy.get('.message'),
        LoginPageValidEmailErrorText: () => "Lütfen geçerli bir e-posta adresi giriniz.",
        LoginPagePasswordErrorField: () => cy.get('#error-box-wrapper'),
        LoginPagePasswordErrorWarningLogo: () => cy.get('.i-warning'),
        LoginPagePasswordErrorTextField: () => cy.get('.message'),
        LoginPagePasswordErrorText: () => "Lütfen şifrenizi giriniz.",
        LoginPageEMailORPasswordErrorField:() => cy.get('#error-box-wrapper'),
        LoginPageEMailORPasswordErrorWarningLogo: () => cy.get('.i-warning'),
        LoginPageEMailORPasswordErrorTextField: () => cy.get('.message'),
        LoginPageEMailORPasswordErrorText: () => "E-posta adresiniz ve/veya şifreniz hatalı.",
        SignUpGenderMaleActiveClass: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.gender.flex.flex-column > div > button.q-secondary.q-fluid.q-button-medium.q-button.male.active'),
        SignUpGenderFemaleActiveClass: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.gender.flex.flex-column > div > button.q-secondary.q-fluid.q-button-medium.q-button.female.active'),
        SignUpGenderMaleGrayClass: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.gender.flex.flex-column > div > button.q-gray.q-fluid.q-button-medium.q-button.male.border-left-none'),
        SignUpGenderFemaleGrayClas: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.gender.flex.flex-column > div > button.q-gray.q-fluid.q-button-medium.q-button.female.border-right-none'),
        ContactPopUp: () => cy.get('.q-popup-main'),
        ContactPopUpMembershipArrangement: () => cy.get('.tabs > :nth-child(1)'),
        ContactPopUpMembershipArrangementText: () => "Üyelik Sözleşmesi",
        ContactPopUpLightningTextField: () => cy.get('.tabs > :nth-child(2)'),
        ContactPopUpLightningText: () => "Aydınlatma Metni",
        ContactPopUpCloseButton: () => cy.get('.q-popup-header > .q-icon'),
        SignUpPopupsNonPlaceFields: () => cy.get('.q-popup-overlay'),
        SingUpLightningTextButton: () => cy.get('#login-register > div.lr-container > div.q-layout.register > form > div.personal-checkbox > div > div.ty-display-flex.ty-checkbox-wrapper > span > div > span'),
        SingUpFirstCheckBox: () => cy.get('.marketing-checkbox > .ty-flex-column > .ty-checkbox-wrapper > .ty-mgr-2 > .ty-bg-beige'),
        SignUpSecondCheckBox: () => cy.get('.personal-checkbox > .ty-flex-column > .ty-checkbox-wrapper > .ty-mgr-2 > .ty-bg-beige'),
        EMailandPasswordErrorMessage: () => "E-posta ve şifrenizi giriniz.",
        EMailErrorMessage: () => "Lütfen geçerli bir email adresi giriniz.",
        PasswordBetween7and15ErrorMessage: () => "Şifreniz 7 ile 15 karakter arasında olmalıdır.",
        PasswordShouldContainLetterMessage: () => "Şifreniz en az 1 harf içermelidir.",
        PasswordShouldContainNumberMessage: () => "Şifreniz en az 1 rakam içermelidir.",
        SingUpPageProgressBar: () => cy.get('.pw-difficulty-progress-bar'),
        SignUpPasswordPowerTextField: () => cy.get('.pw-title'),
        SignUpPasswordPowerWeakPasswordText: () => "Zayıf Şifre",
        SignUpPasswordPowerStrongPasswordText: () => "Güçlü Şifre",
        RedPersonalCheckBoxField: () => cy.get('.personal-error-checkbox > .ty-flex-column > .ty-checkbox-wrapper'),
        EMailVerifyModalPopUp: () => cy.get('#login-register > div.lr-container > div.q-layout.register > div > div > div'),

    }
}

module.exports = new LoginPageElements()