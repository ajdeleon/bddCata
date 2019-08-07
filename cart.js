class CartStore {
  constructor () {
    this.carts = {}
  }

  save (cartId, cart) {
    this.carts[cartId] = cart
  }

  get (cartId) {
    const emptyCart = {
      products: []
    }
    return this.carts[cartId] || emptyCart
  }
}

const cartStore = new CartStore()

function getCart (cartId) {
  return cartStore.get(cartId)
}

function addProduct (cartId, product) {
  const cart = cartStore.get(cartId)
  cart.products.push(product)
  cartStore.save(cartId, cart)
}

function getProduct (id, name) {
  return { id, name }
}

var exports = module.exports = {}

exports.getCart = getCart
exports.addProduct = addProduct
exports.getProduct = getProduct
