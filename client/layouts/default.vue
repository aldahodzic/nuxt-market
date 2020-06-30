<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light shadow-bottom">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
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
          <nuxt-link to="/cart" class="link navbar-text">
            Корзина <span class="badge badge-primary">{{ itemsInCart }}</span>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <Nuxt class="mt-4 pt-5 container" />
  </div>
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
  }
}
</script>

<style media="screen">
  nav {
    background-color: #fff;
  }

  body {
    background-color: rgba(0,0,0,0.03);
  }

  .cursor {
    cursor: pointer;
  }

  .font-weight-medium {
    font-weight: 600;
  }

  .shadow-bottom {
    box-shadow: 0 4px 2px -2px rgba(0,0,0,0.08);
  }
</style>
