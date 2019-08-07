Feature: Add and Remove Items to a cart
    Everybody needs a goPuff basket with snacks

    Scenario: Start with an empty basket
        Given a new user
        When I don't add anything
        Then I should have no products in a basket and no totals

#     Scenario: Lets add a coke
#         Given a new user
#         When I add a coke
#         Then I should have one product in my basket
#         And it better be a coke

# Feature: Carts have a basket and a total
#     You can't checkout with a basket, but you can checkout a cart

#     Scenario: Start with an empty basket
#         Given a new user
#         When I don't add anything
#         Then I should have no products in a basket and no totals

#     Scenario: Lets add a coke
#         Given a new user
#         When I add a coke
#         Then I should have one product in my basket
#         And it better be a coke
