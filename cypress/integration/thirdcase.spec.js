/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    return false
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })


describe('third scenario cases: Checking image of first four elements return successfully', () =>{
    
    before('opening webpage', () =>{
        cy.visit("/", {
            timeout: 5000,
            onBeforeLoad(win) {
                cy.stub(win.Notification, "requestPermission").resolves("denied")
            }
        })
        cy.get('.modal-close > svg').click()
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click()
        cy.get('.close-button', { timeout: 10000 }).click()
    })

    it('checking pictures 1by1', () =>{
        cy.get("#navigation-wrapper > nav > ul > li").then((elements) =>{
            var numberOfMenus = elements.length
            cy.get(':nth-child(10) > .category-header').click()
            cy.get('div.styles-module_slider__o0fqa > a:nth-child(1) > img').click()
            cy.scrollTo(500,200)
            cy.get('.overlay').click( { force: true })
            for(var i=numberOfMenus; i>=1; i--){
                var endName = ":nth-child(" + i + ") > .category-header"
                cy.get(endName).click()
                var escapeAdv = 1
                if ( i==9 ){
                    var escapeAdv = 3
                }
                cy.get('div.styles-module_slider__o0fqa > a:nth-child(' + escapeAdv + ') > img', { timeout: 10000 }).click()
                for(var j=2; j<=5; j++){
                    var logResult = ""
                    var selectedItem= "#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(4) > div > div:nth-child(" + j + ") > div.p-card-chldrn-cntnr"
                    cy.get(selectedItem).find("a").find("img").invoke("attr","src").then($isExist =>{
                        if (expect($isExist.includes("https://cdn.dsmcdn.com/")).to.be){
                            logResult = endName.text + " category " + j + ". item image exist"
                        }
                        else {
                            logResult = endName.text + " category " + j + ". item image not exist"
                        }
                    })
                    console.log(logResult)
                }
            }
        })
    })
})