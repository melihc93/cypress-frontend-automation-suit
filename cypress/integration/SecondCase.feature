Feature: SecondCase
    Scenario: First scenario:
        Given Trendyol webpage up and work
        When User click Login button
        Then Login page open successfully
        When User input "mcitu93@gmail.com" to id and "trendyolcase123" to password field
        And User click Giriş Yap button
        Then User successfully logged input
        When User searched for "Oyuncu Bilgisayarı"
        And User Enter "Monster" to brand filtering field
        And User click first item
        And User click Price Menu button
        And User enter min "3000" and max "10000" to price filters
        And User click price search button
        And User click first item of returning results
        And User adding that item into cart

    Scenario: Second scenario:
        Given Trendyol webpage up and work
        When User click Login button
        Then Login page open successfully
        When User input "mcitu93@gmail.com" to id and "trendyolcase123" to password field
        And User click Giriş Yap button
        Then User successfully logged input
        When User searched for "Gömlek"
        And User favorited first item in the list
        And User click my favorites button
        Then My favorites opens successfully
        When User add previously added item to the cart

