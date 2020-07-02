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
          <nuxt-link to="/cart" class="navbar-text">
            Корзина <span class="badge badge-info">{{ itemsInCart }}</span>
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
  },
  mounted () {
    const cartProducts = sessionStorage.cartProducts ? JSON.parse(sessionStorage.cartProducts) : []
    this.$store.commit('restoreProductsInCart', cartProducts)
  }
}
</script>

<style media="screen">
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

  body {
    font-family: Source Sans Pro;
  }

  nav {
    background-color: #fff;
  }

  body {
    background-color: rgba(0,0,0,0.03);
  }

  .min-vh-50 {
    min-height: 50vh;
  }

  .text-muted-light {
    color: rgba(0,0,0,0.25);
  }

  .title {
    font-size: calc(44px + 16 * ((100vw - 320px) / (1280 - 320)));
  }

  .btn {
    border-radius: 100px;
    font-size: 18px;
  }

  .btn-small {
    font-size: 14px;
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

  .cart-price-bg {
    background-color: #fff3b5;
  }
</style>
