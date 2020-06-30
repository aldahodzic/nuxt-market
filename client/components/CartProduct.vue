<template>
  <div class="col-12 bg-white mx-auto rounded row">
    <nuxt-link :to="link" class="col-lg-4 text-center">
      <img class="img-fluid img-preview" :src="product.img" :alt="product.name">
    </nuxt-link>
    <div class="col-lg-8 row mx-auto my-3">
      <div class="col-md">
        <nuxt-link :to="link">
          <h4 class="font-weight-medium">
            {{ product.name }}
          </h4>
        </nuxt-link>
        <p class="pt-3">
          <span class="cart-price cart-price-bg p-2 rounded">
            {{ product.price }} <small>RUB</small>
          </span>
        </p>
      </div>
      <div class="col-md my-md-0 my-3 align-self-center text-md-center">
        <button :disabled="quantity == 1" class="btn font-weight-bold" @click="quantity--">
          -
        </button>
        <input v-model="quantity" class="quantity-input form-control d-inline text-center mx-1" type="text">
        <button class="btn font-weight-bold" @click="quantity++">
          +
        </button>
      </div>
      <div class="col-md text-md-right align-self-center">
        <p class="text-muted">
          Сумма
        </p>
        <p class="cart-price">
          {{ sum }} <small>RUB</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    quantity: 1
  }),
  computed: {
    sum () {
      return +this.product.price.replace(/ /g, '') * this.quantity
    },
    link () {
      return `${this.product.category}/${this.product.name.replace(/ /g, '-')}`
    },
    cartData () {
      return {
        name: this.product.name,
        price: this.sum
      }
    }
  },
  watch: {
    sum (value) {
      this.$store.commit('updateSumPayment', this.cartData)
    }
  },
  mounted () {
    this.$store.commit('updateSumPayment', this.cartData)
  }
}
</script>

<style lang="css" scoped>
  .cart-price {
    font-size: 22px;
  }

  .img-preview {
    height: 200px;
  }

  .quantity-input {
    width: 50px;
  }

  .btn:focus {
    box-shadow: none;
  }
</style>
