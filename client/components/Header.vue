<template>
  <b-navbar toggleable="lg" class="navbar fixed-top navbar-expand-lg navbar-light shadow-bottom">
    <div class="container">
      <nuxt-link class="navbar-brand font-weight-medium" to="/">
        Electroscoo
      </nuxt-link>
      <b-navbar-toggle
        class="navbar-toggler"
        target="navbarNav"
      >
        <span class="navbar-toggler-icon" />
      </b-navbar-toggle>
      <b-collapse id="navbarNav" is-nav>
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
        <nuxt-link
          to="/cart"
          tag="span"
          class="nav-item"
          active-class="active"
          exact
        >
          <a class="nav-link link px-0">Корзина <span v-if="itemsInCart" class="badge badge-info">{{ itemsInCart }}</span></a>
        </nuxt-link>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        route: '/',
        name: 'Главная'
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

.active, .active a {
  color: #000 !important;
}
</style>
