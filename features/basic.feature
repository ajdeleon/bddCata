Feature: Add and Remove Items to a cart
    Everybody needs a goPuff basket with snacks

    Scenario: Start with an empty basket
        Given a new user
        When I don't add anything
        Then I should have no products in a basket 
        And have a total of 0

    Scenario: Lets add a coke
        Given a new user
        When I add a coke
        Then I should have one product in my basket
        And it better be a coke

    Scenario: Lets remove a coke
        Given a new user
        When I add a coke
        Then I remove a coke
        Then I should have no products in a basket
        And have a total of 0

    Scenario: Calculate simple totals
        Given a new user
        When I add a coke
        Then I should have one product in my basket
        And it better be a coke
        And the total should be 2 dollars

    Scenario: Calculate simple totals with remove
        Given a new user
        When I add a coke
        When I add a coke
        When I add a coke
        When I add a coke
        When I add a coke
        Then I remove a coke
        And the total should be 8 dollars
