const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const { getCart, addProduct, getProduct, removeProduct } = require('../../cart')

const uuid = function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)} // eslint-disable-line

const coke = getProduct(1, 'coke', 2)

Given('a new user', function () {
  this.cartId = uuid()
})

When('I don\'t add anything', function () {
  return 'no doing anything'
})

When('I add a coke', function () {
  addProduct(this.cartId, coke)
})

Then('I should have no products in a basket', function () {
  // Write code here that turns the phrase above into concrete actions
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products.length, 0, 'Product length is not zero')
})

Then('I should have one product in my basket', function () {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products.length, 1, 'Product length is not 1')
})

Then('it better be a coke', function () {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.products[0].id, coke.id, 'Product length is not coke')
})

Then('I remove a coke', function () {
  removeProduct(this.cartId, coke)
})

Then('the total should be {int} dollars', function (int) {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.total, int, 'Total is not correct')
})

Then('have a total of {int}', function (int) {
  const cart = getCart(this.cartId)
  assert.strictEqual(cart.total, int, 'Total is not correct')
})
