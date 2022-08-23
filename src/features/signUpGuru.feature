Feature:  Sign up a new user on Guru
    Create user and login

    Background: User is directed to the sign up page

        Given script loads data from "login" with "guru"
        And the user visits the guru url

    Scenario: Sign up a new user on Guru
        When the user clicks the visit here link
        When the user adds random email to sign up
        When the user clicks submit button to sign up
        When the user stores the newly generated email and password


    Scenario: login, create new customer and verify details
        When the user logs in using newly generated email and password
        Then the user verifies the successful log in
        When the user clicks on add new customer
        When the user adds details for the new customer and submits
        Then the user verifies details for the new customer
