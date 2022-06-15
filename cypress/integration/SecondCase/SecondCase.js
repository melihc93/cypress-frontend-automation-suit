import { Given , And , Then , When } from "cypress-cucumber-preprocessor/steps";

import MainPageElements from '../PageObjects/mainpage.js'
import LoginPageElements from '../PageObjects/loginpage'
import SecondScenarioObjects from '../PageObjects/secondscenariobjects.js'

Given('Trendyol webpage up and work', () =>{
    cy.visit("/", {
        timeout: 5000,
        onBeforeLoad(win) {
            cy.stub(win.Notification, "requestPermission").resolves("denied")
            cy.stub(win, 'open').as('newScreenOpenAction')
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

When('User input {string} to id and {string} to password field', (username, password) =>{
    LoginPageElements.elements.EMailInputField().type(username, {force: true})
    LoginPageElements.elements.PasswordInputField().type(password, {force: true})
})

When('User click Giriş Yap button', () =>{
    LoginPageElements.elements.LoginButton().click()
})

Then('User successfully logged input', () =>{
    cy.wait(3000)
    SecondScenarioObjects.elements.LoggedCheckerAtMyAccaount().should("be.visible")
    SecondScenarioObjects.elements.LoggedCheckerAtMyAccaount().should("have.text", SecondScenarioObjects.elements.LoggedCheckerAtMyAccaountText())
})

When('User searched for {string}', (searchquery) =>{
    SecondScenarioObjects.elements.SearchInputField().type(searchquery).type('{enter}')
})

When('User Enter {string} to brand filtering field', (brand) =>{
    SecondScenarioObjects.elements.BrandInputField().type(brand)
})

When('User click first item', () =>{
    SecondScenarioObjects.elements.CheckbosofBrandInput().click( {force: true})
})

When('User click Price Menu button', () =>{
    cy.wait(2000)
    SecondScenarioObjects.elements.PriceMenuButton().click()
})

When('User enter min {string} and max {string} to price filters', (minimumvalue, maximumvalue) =>{
    SecondScenarioObjects.elements.PriceMinField().type(minimumvalue)
    SecondScenarioObjects.elements.PRiceMaxField().type(maximumvalue)
})

When('User click price search button', ()=>{
    SecondScenarioObjects.elements.PriceSearchButton().click()
})

When('User click first item of returning results', () =>{
    SecondScenarioObjects.elements.SelectedItem().invoke("attr","href").then(($externalsite) =>{
        cy.visit($externalsite)
    })
})

When('User adding that item into cart', () =>{
    SecondScenarioObjects.elements.AddToBasketButton().click()
})

When('User favorited first item in the list', () =>{
    SecondScenarioObjects.elements.AddingShirtToFavoritesButton().click( { force: true })
})

When('User click my favorites button', () =>{
    SecondScenarioObjects.elements.MyFavoritesButton().click()
})

Then('My favorites opens successfully', () =>{
    cy.url().should("include",SecondScenarioObjects.elements.FavoriWebPageUrlPath())
})

When('User add previously added item to the cart', () =>{
    SecondScenarioObjects.elements.AddingCartFromFavorites().click()
})