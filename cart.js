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

const pipeline = (fns, cartId) => fns.reduce((cart, fn) => fn(cart), cartId)

function getCart (cartId) {
  return pipeline([
    loadCart,
    calcQuantity,
    sumCart
  ], cartId)
}

function loadCart (cartId) {
  return cartStore.get(cartId)
}

function calcQuantity (cart) {
  const summedProducts = cart.products.reduce((acc, p) => {
    const currentQty = (acc[p.id] || { qty: 0 }).qty
    acc[p.id] = { ...p, qty: currentQty + p.qty }
    return acc
  }, {})
  const products = Object.values(summedProducts).filter(p => (p.qty > 0))
  cart = { ...cart, products }
  return cart
}

function sumCart (cart) {
  return { ...cart, total: cart.products.reduce((acc, p) => acc + (p.price * p.qty), 0) }
}

function addProduct (cartId, product) {
  const cart = cartStore.get(cartId)
  cart.products.push({ ...product, qty: 1 })
  cartStore.save(cartId, cart)
}

function removeProduct (cartId, product) {
  const cart = cartStore.get(cartId)
  cart.products.push({ ...product, qty: -1 })
  cartStore.save(cartId, cart)
}

function getProduct (id, name, price) {
  return { id, name, price }
}

var exports = module.exports = {}

exports.getCart = getCart
exports.addProduct = addProduct
exports.getProduct = getProduct
exports.removeProduct = removeProduct
