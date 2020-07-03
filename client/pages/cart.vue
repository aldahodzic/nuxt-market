<template>
  <section class="container">
    <h1 class="title text-muted-light font-weight-bold">
      Корзина
    </h1>
    <div class="mt-4">
      <div v-if="productsInCart.length" class="">
        <CartProduct v-for="item in productsInCart" :key="item.name" class="my-3" :product="item" />
        <div class="row mx-auto justify-content-between">
          <div class="d-md-flex d-none col-4 align-self-center">
            <nuxt-link tag="button" to="/" class="btn btn-info py-2 px-3">
              Продолжить покупки
            </nuxt-link>
          </div>
          <div class="col-md-4 cart-price-bg rounded py-3 mb-md-0 mb-4">
            <div class="row">
              <h4 class="col">
                Итого:
              </h4>
              <h4 class="col text-right">
                {{ cartSumPayment }} <small>RUB</small>
              </h4>
            </div>
            <nuxt-link tag="button" to="/" class="w-100 btn btn-success py-2 px-3 mt-1">
              Оформить заказ
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else class="">
        <p>Здесь пока ничего нет, но вы можете это исправить :)</p>
        <nuxt-link tag="button" to="/" class="btn btn-success">
          В магазин
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import CartProduct from '@/components/CartProduct'

export default {
  components: {
    CartProduct
  },
  computed: {
    productsInCart () {
      return this.$store.state.cartProducts
    },
    cartSumPayment () {
      return this.$store.state.cartSumPayment
    }
  }
}
</script>
