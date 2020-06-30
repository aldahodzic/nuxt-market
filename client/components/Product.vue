<template>
  <div class="col-lg-3 col-12 mb-4">
    <div class="card h-100 px-0 col-md-12">
      <nuxt-link
        tag="img"
        :to="link"
        class="card-img-top cursor"
        :src="product.img"
        alt="product.name"
      />
      <div class="card-body pt-2 pb-0">
        <h5 class="card-title font-weight-medium mt-1">
          {{ product.name }}
        </h5>
        <p class="text-muted mb-2">
          {{ product.description }}
        </p>
        <p class="text-success font-weight-medium">
          {{ product.price }} ₽
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="link" class="btn btn-info">
          Смотреть
        </nuxt-link>
        <div v-if="!isInCart" class="btn btn-success ml-xl-2 mt-xl-0 mt-lg-2" @click="addProductInCart">
          В корзину
        </div>
        <div v-else class="btn btn-success ml-xl-2 mt-xl-0 mt-lg-2" @click="removeProductInCart">
          Добавлено!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    link () {
      return `${this.$route.path}/${this.product.name.replace(/ /g, '-')}`
    },
    cart () {
      return this.$store.state.cartProducts
    },
    isInCart () {
      return this.cart.some(cartProduct => cartProduct.name === this.product.name)
    }
  },
  methods: {
    addProductInCart () {
      this.$store.commit('updateCartProducts', this.product)
    },
    removeProductInCart () {
      this.$store.commit('removeCartProducts', this.product)
    }
  }
}
</script>

<style lang="css" scoped>
@media screen and (min-width: 992px) {
  .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
  }
}

.position-absolute {
  position: absolute;
}

.card {
  border: none;
  transition: 300ms;
}

.card:hover {
  box-shadow: 0 5px 20px rgba(0,0,0,0.06)
}

.card-footer {
  background-color: white !important;
  border-top: 0;
}

.btn {
  border-radius: 100px;
  font-size: 14px;
}
</style>
