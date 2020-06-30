export const state = () => ({
  cartProducts: [],
  cartProductsPrices: [],
  cartSumPayment: 0
})

export const mutations = {
  restoreProductsInCart (state, products) {
    state.cartProducts = products
  },
  addCartProduct (state, product) {
    state.cartProducts.push(product)
    sessionStorage.cartProducts = JSON.stringify(state.cartProducts)
  },
  removeCartProduct (state, product) {
    state.cartProducts = state.cartProducts.filter(cartProduct => cartProduct.name !== product.name)
    sessionStorage.cartProducts = JSON.stringify(state.cartProducts)
  },
  updateSumPayment (state, product) {
    if (state.cartProductsPrices.some(item => item.name === product.name)) {
      const index = state.cartProductsPrices.findIndex(item => item.name === product.name)
      state.cartProductsPrices[index] = product
    } else {
      state.cartProductsPrices.push(product)
    }

    state.cartSumPayment = state.cartProductsPrices.reduce((acc, curr) => {
      return acc + curr.price
    }, 0)
  }
}
