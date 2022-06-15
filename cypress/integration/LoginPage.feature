Feature: LoginPage
    Scenario: Open Trendyol Login Page Successfully
        Given Trendyol webpage up and work
        When User click Login button
        Then Login page open successfully

    Scenario: Checking login page elements shown successfully
        Given Trendyol webpage up and work
        When User click Login button
        Then Main title of login module shown successfully
        And Sub title of login module shown successfully
        And Giriş Yap button shown successfully
        And Üye Ol button shown successfully
        And E-Posta input field and its title shown successfully
        And Şifre input field and its titile shown successfully
        And Şifremi unuttum button shown successfully
        And Giriş yap button shown successfully
        And Facebook ile giriş yap button shown successfully
        And Google ile giriş yap button shown successfully

    Scenario: Üye Ol Button Works Successfuly
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        Then Üye ol tab is open and active

    Scenario: Üye Ol Tab page elements shown successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        Then Signup page E-Posta input field and its title shown successfully
        And Signup page password field and its title shown successfully
        And Password info text should be shown successfully
        And Gender Option should be shown successfully
        And SignUp button and inside text shown successfully
        And SignUp Button info text shown successfully
        And SignUp Button info text has Üyelik Koşulları text underlined and its a link
        And First Checkbox Input and its description text shown successfully
        And Second Checkbox Input and its description text shown successfully
        And Facebook sign up button and its texts shown successfully
        And Google sign up button and its texts shown successfully

    Scenario: User clicks Giris Yap button after clicked Üye Ol
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        Then Signup page E-Posta input field and its title shown successfully
        When User Click Giris Yap button
        Then Sub title of login module shown successfully

    Scenario: Şifremi Unuttum button successfully redirect sifremi unuttum page
        Given Trendyol webpage up and work
        When User click Login button
        And User clicks Şifremi unutttum button
        Then Şifremi Unuttum trendyol webpage opens successfully

    Scenario: User clicks login button directly without filling any field, error message shown successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User clicks login button of Login menu
        Then Error Message of valid e-mail shown successfully

    Scenario Outline: User inputs several unvalid e-mails then error message of valid e-mail shown successfully 
        Given Trendyol webpage up and work
        When User click Login button
        And User clicks login button of Login menu
        And User enters "<e-mails>" to e-mail input field
        And User clicks login button of Login menu
        Then Error Message of valid e-mail shown successfully

        Examples:
            | e-mails |
            | melih  |
            | !'^+%' |
            | 0 |
            | ___123__ |
            |    |
            | -123123@-123123 |
            | 234l2k34l2k34@2l342l3k4j2l3k4 |
            | @ |

    Scenario Outline: When user click login button with input valid e-mail and without password, password error message shown successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "<e-mails>" to e-mail input field
        And User clicks login button of Login menu
        Then Error Message of password shown successfully

        Examples:
            | e-mails |
            | melih@melih.com  |

    Scenario Outline: When user click login button with input valid e-mail and without valid password, status code 400 response return 
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "<e-mails>" to e-mail input field
        And User enters "<passwords>" to password input field
        And User clicks login button of Login menu
        Then Error Message of password or e-mail shown successfully

        Examples:
            | e-mails | passwords |
            | melih@melih.com  | 1 |
            | melih@melih.com | trendyol_Test123 |
            | melih@melih.com | !'+^'% |
            | melih@melih.com | __ |
            | asdasd@asdasd.com | // TRUE |
            | melih@melih.com | DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123DummyPassword_123 |

    Scenario Outline: When user click Login-horizontal menu button, after filled something on e-posta and şifre then click Üye Ol button, e-posta and şifre input fields should be cleared
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "<e-mails>" to e-mail input field
        And User enters "<passwords>" to password input field
        And User Click Üye Ol button
        And User Click Giris Yap button
        Then Input fields of E-Posta and Şifre should be cleared

        Examples:
            | e-mails | passwords |
            | melih@melih.com  | 1123123 |

    Scenario Outline: When user entered first character of e mail domain, suggestions shown successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "<e-mails>" to e-mail input field
        Then Suggestion as "<suggestions>" shown successfully

        Examples:
            | e-mails | suggestions |
            | melih@m  | melih@mynet.com |
            | melih@w | melih@windowslive.com |
            | melih@h | melih@hotmail.com |
            | melih@g | melih@gmail.com |

    Scenario: When User clicks show/hide button of password input field, password shown/hide respectively
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "123123" to password input field
        And User clicks show password button inside right hand side of password input field
        Then Password shown successfully
        And Password hide-shown button type changed as "open" type
        When User clicks show password button inside right hand side of password input field
        Then Password hide successfully
        And Password hide-shown button type changed as "close" type

    Scenario: When user come back to login page from ŞifremiUnuttum page, e-mail and password fields shown cleared successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User enters "dummytestdata@dummy.com" to e-mail input field
        And User enters "dummpassword" to password input field
        And User clicks Şifremi unutttum button
        Then Şifremi Unuttum trendyol webpage opens successfully
        When User goes back to previous page via back button
        Then Input fields of E-Posta and Şifre should be cleared

    Scenario: Selecting Gender for buttons working successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        Then Üye ol tab is open and active
        When User clicks "female" option of gender changing menus
        Then "female" section active and selected
        When User clicks "male" option of gender changing menus
        Then "male" section active and selected

    Scenario: Clicking ÜyelikKoşulları button opens contract pop-up successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click ÜyelikKoşulları link
        Then Üyelik koşulları pop up opens successfully

    Scenario: User able to close Üyelik Koşulları Pop up
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click ÜyelikKoşulları link
        And User click X button at top-right of the pop-up
        Then Contact Text pop up closed successfully
        When User click ÜyelikKoşulları link
        When User click somewhere else insted of pop-up inside website
        Then Contact Text pop up closed successfully

    Scenario: Clicking Aydınlatma Metni button opens lightning text pop-up successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click Aydınlatma metni link
        Then Aydınlatma metni pop up opens successfully

    Scenario: User able to close Lighning Text Pop up successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click Aydınlatma metni link
        And User click X button at top-right of the pop-up
        Then Contact Text pop up closed successfully
        When User click Aydınlatma metni link
        When User click somewhere else insted of pop-up inside website
        Then Contact Text pop up closed successfully

    Scenario: When click first check box its status changed to be active-passive successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click first checkbox below Üye Ol button
        Then First Check Box become active and selected
        When User click first checkbox below Üye Ol button
        Then First Check Box become passive and unselected

    Scenario: When click second check box its status changed to be active-passive successfully
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User click second checkbox below Üye Ol button
        Then Second Check Box become active and selected
        When User click second checkbox below Üye Ol button
        Then Second Check Box become passive and unselected

    Scenario: When user click Üye Ol directly without entering any input, error message shown
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User Click Üye Ol button below e-mail and password input fields
        Then Error mesage of e-mail and password should be shown

    Scenario Outline: When user enters invalid e-mails into E-Posta input field, error messages show after user click Üye Ol
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<e-mails>" info e-Posta input field
        And User Click Üye Ol button below e-mail and password input fields
        Then Error mesage of e-mail should be shown

        Examples:
            | e-mails |
            | melih  |
            | 123 |
            | DummyEmail@DummyEmailDummyEmail@DummyEmailDummyEmail@DummyEmail |
            | DummyEmail@DummyEmail |
            | TRUE |
            | -231 |
            | !'+'!^%+'&' |

    Scenario Outline: When user enters invalid password below 7 character and above 15 character
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<passwords>" info password input field
        And User enters "<e-mails>" info e-Posta input field
        And User Click Üye Ol button below e-mail and password input fields
        Then Error mesage of password should be between 7 and 15 should be shown

        Examples:
            | passwords | e-mails |
            | 1 | melih@melih.com |
            | -1 | melih@melih.com |
            | D | melih@melih.com |
            | dummypasswordabovefifteencharacters | melih@melih.com |
            | 123123123123123123123123123123123 | melih@melih.com |
            | -231231231231231 | melih@melih.com |
            | !'+'!^%+'&!'^!'+!'^!'' | melih@melih.com |
            | !''^ | melih@melih.com |
            | TRUE | melih@melih.com |
            | true | melih@melih.com |
            | true// | melih@melih.com |
            | 12345a | melih@melih.com |
            | 123456789111315a | melih@melih.com |

    Scenario Outline: When user enters invalid password which contains only letters within range of 7 to 15 characters, error message shown
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<passwords>" info password input field
        And User enters "<e-mails>" info e-Posta input field
        And User Click Üye Ol button below e-mail and password input fields
        Then Error mesage of password should contain at least 1 letter shown successfully
        Examples:
            | passwords | e-mails |
            | 11231232 | melih@melih.com |

    Scenario Outline: When user enters invalid password which contains only numbers within range of 7 to 15 characters, error message shown
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<passwords>" info password input field
        And User enters "<e-mails>" info e-Posta input field
        And User Click Üye Ol button below e-mail and password input fields
        Then Error mesage of password should contain at least 1 number shown successfully
        Examples:
            | passwords | e-mails |
            | asdasdasdasd | melih@melih.com |

    Scenario Outline: Weak password input trigger indicator below password input field
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<passwords>" info password input field
        Then Progress bar shown successfully below password field
        Then Password power indicator shown successfully below password input field and shows its a weak password


        Examples:
            | passwords |
            | 11231232 |
            | 123 |
            | melih |
            | dummypassword123 |

    Scenario Outline: Strong password input trigger indicator below password input field
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "<passwords>" info password input field
        Then Progress bar shown successfully below password field
        Then Password power indicator shown successfully below password input field and shows its a strong password


        Examples:
            | passwords |
            | 123322Aaa__! |
            | @@@@@@@@@@aa1 |

    Scenario: When user clicks Üye Ol button after entering valid e-mail and password, 2nd checkbox become red, stands for warning
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "melih@melih.com" info e-Posta input field
        And User enters "12345676aa" info password input field
        Then Progress bar shown successfully below password field
        And Password power indicator shown successfully below password input field and shows its a weak password
        When User Click Üye Ol button below e-mail and password input fields
        Then Second Checkbox become red

    Scenario: When user click Üye ol button, after click 2nd checkbox and input valid e-mail and password
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "melih@melih22.com" info e-Posta input field
        And User enters "12345676aa" info password input field
        Then Progress bar shown successfully below password field
        And Password power indicator shown successfully below password input field and shows its a weak password
        When User click second checkbox below Üye Ol button 
        And User Click Üye Ol button below e-mail and password input fields
        Then E Mail verification pop up shown successfully

    Scenario: When user click Üye ol button, after click 2nd checkbox and input valid e-mail and password and choose male gender
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "melih123@melih23.com" info e-Posta input field
        And User enters "12345676aa" info password input field
        Then Progress bar shown successfully below password field
        And Password power indicator shown successfully below password input field and shows its a weak password
        When User click second checkbox below Üye Ol button
        And User clicks "male" option of gender changing menus
        And User Click Üye Ol button below e-mail and password input fields
        Then E Mail verification pop up shown successfully

    Scenario: When user click Üye ol button, after click 2nd checkbox and input valid e-mail and password and choose female gender
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "melih321@melihdd.com" info e-Posta input field
        And User enters "12345676aa" info password input field
        Then Progress bar shown successfully below password field
        And Password power indicator shown successfully below password input field and shows its a weak password
        When User click second checkbox below Üye Ol button
        And User clicks "female" option of gender changing menus
        And User Click Üye Ol button below e-mail and password input fields
        Then E Mail verification pop up shown successfully

    Scenario: When user click Üye ol button, after click 2nd checkbox and input valid e-mail and password and choose female gender and click 1st checkbox
        Given Trendyol webpage up and work
        When User click Login button
        And User Click Üye Ol button
        And User enters "melih213@melihasd.com" info e-Posta input field
        And User enters "12345676aa" info password input field
        Then Progress bar shown successfully below password field
        And Password power indicator shown successfully below password input field and shows its a weak password
        When User click second checkbox below Üye Ol button
        And User clicks "female" option of gender changing menus
        And User click first checkbox below Üye Ol button
        And User Click Üye Ol button below e-mail and password input fields
        Then E Mail verification pop up shown successfully

