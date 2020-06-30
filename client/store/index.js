export const state = () => ({
  cartProducts: [],
  cartProductsPrices: [],
  cartSumPayment: 0
})

export const mutations = {
  addCartProduct (state, product) {
    state.cartProducts.push(product)
  },
  removeCartProduct (state, product) {
    state.cartProducts = state.cartProducts.filter(cartProduct => cartProduct.name !== product.name)
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
