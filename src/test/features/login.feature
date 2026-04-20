Feature: Login page validation

  Scenario: Login with valid credentials
    Given I am on the login page
    When I enter "standard_user" and "secret_sauce" credentials
    When I click on the login button
    Then I should be logged in successfully
