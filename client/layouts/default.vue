<template>
  <div>
    <Header />
    <Nuxt class="mt-4 pt-5 min-vh-100" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header, Footer
  }
}
</script>

<style media="screen">
  body {
    font-family: Source Sans Pro, sans-serif;
    background-color: rgba(0,0,0,0.03);
  }

  .min-vh-50 {
    min-height: 50vh;
  }

  .link, .nav-link {
    transition: 200ms;
    color: rgba(0, 0, 0, 0.5);
  }

  .link:hover {
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
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
