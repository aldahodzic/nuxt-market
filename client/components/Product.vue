<template>
  <div class="col-lg-3 col-12 mb-4">
    <div class="card h-100 px-0 col-md-12">
      <img class="card-img-top" :src="product.img" :alt="product.name">
      <div class="card-body pt-2">
        <h5 class="card-title mt-1">
          {{ product.name }}
        </h5>
        <h5 class="text-muted">
          Цена: {{ product.price }} ₽
        </h5>
        <nuxt-link :to="link" class="btn btn-info font-weight-bold mt-2">
          Смотреть
        </nuxt-link>
        <button class="btn btn-success font-weight-bold mt-2" name="button">
          Купить
        </button>
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
</style>
