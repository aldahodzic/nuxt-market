export const state = () => ({
  cartProducts: []
})

export const mutations = {
  updateCartProducts (state, product) {
    state.cartProducts.push(product)
  },
  removeCartProducts (state, product) {
    state.cartProducts = state.cartProducts.filter(cartProduct => cartProduct.name !== product.name)
  }
}
