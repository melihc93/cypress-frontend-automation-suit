class MainPageElements {
    elements= {
        MainPageLoginButton: ()=> cy.get('.user-login-container > .link > .link-text')
    }
}

module.exports = new MainPageElements()