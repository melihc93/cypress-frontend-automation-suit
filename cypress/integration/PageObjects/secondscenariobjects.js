class SecondScenarioObjects {
    elements = {
        LoggedCheckerAtMyAccaount: () => cy.get('#account-navigation-container > div > div.account-nav-item.user-login-container > div.link.account-user > p'),
        LoggedCheckerAtMyAccaountText: () => "Hesabım",
        SearchInputField: () => cy.get('#auto-complete-app > div > div.search-box-container > input'),
        BrandInputField: () => cy.get('.fltr-srch-inpt'),
        CheckbosofBrandInput: () => cy.get('#sticky > div > div:nth-child(2) > div.fltrs > a > div.fltr-item-text'),
        PriceMenuButton: () => cy.get(':nth-child(4) > .fltr-cntnr-ttl-area'),
        PriceMinField: () => cy.get('.min'),
        PRiceMaxField: () => cy.get('.max'),
        PriceSearchButton: () => cy.get('.fltr-srch-prc-rng-srch'),
        SelectedItem: () => cy.get('#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(4) > div > div.p-card-wrppr > div.p-card-chldrn-cntnr > a'),
        AddToBasketButton: () => cy.get('.add-to-basket-button-text'),
        AddingShirtToFavoritesButton: () => cy.get('#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(4) > div > div:nth-child(2) > div.fvrt-btn-wrppr > i'),
        MyFavoritesButton: () => cy.get('.account-favorites > .link > .link-text'),
        FavoriWebPageUrlPath: () => "/Hesabim/Favoriler",
        AddingCartFromFavorites: () => cy.get('#account-gw-favorites > div > div:nth-child(3) > div > div > div.add-to-basket-container > div.basket-button > span'),
        
    }
}

module.exports = new SecondScenarioObjects()