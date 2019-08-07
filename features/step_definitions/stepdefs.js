const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const { getCart } = require('../../cart')

const uuid = function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)} // eslint-disable-line

Given('a new user', function () {
  this.cartId = uuid()
})

When('I don\'t add anything', function () {
  return 'no doing anything'
})

Then('I should have no products in a basket and no totals', function () {
  // Write code here that turns the phrase above into concrete actions
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products.length, 0, 'Product length is not zero')
})
