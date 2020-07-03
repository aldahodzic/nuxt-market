<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow-bottom">
    <div class="container">
      <nuxt-link class="navbar-brand font-weight-medium" to="/">
        Electroscoo
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <nuxt-link
            v-for="link in links"
            :key="link.route"
            tag="li"
            :to="link.route"
            active-class="active"
            class="nav-item"
            exact
          >
            <a class="nav-link">{{ link.name }}</a>
          </nuxt-link>
        </ul>
        <nuxt-link to="/cart" class="navbar-text">
          Корзина <span class="badge badge-info">{{ itemsInCart }}</span>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        route: '/',
        name: 'Home'
      },
      {
        route: '/kugoo',
        name: 'Kugoo'
      },
      {
        route: '/white-siberia',
        name: 'White Siberia'
      }
    ]
  }),
  computed: {
    itemsInCart () {
      return this.$store.state.cartProducts.length
    }
  },
  mounted () {
    const cartProducts = sessionStorage.cartProducts ? JSON.parse(sessionStorage.cartProducts) : []
    this.$store.commit('restoreProductsInCart', cartProducts)
  }
}
</script>

<style lang="css" scoped>
nav {
  background-color: #fff;
}
</style>
