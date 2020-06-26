<template>
  <section class="container mt-4">
    <div v-if="product">
      <h1>{{ product.category }}</h1>
      <hr>
      <div class="row">
        <Product v-for="item in product.products" :key="item.name" :product="item" />
      </div>
    </div>
    <Loader v-else class="mt-5" size="5rem" />
  </section>
</template>

<script>
import Product from '@/components/Product'
import Loader from '@/components/Loader'

export default {
  components: {
    Product, Loader
  },
  data: () => ({
    product: null
  }),
  async created () {
    const result = await fetch(`${process.env.baseUrl}all?category=${this.$route.params.category}`)
    this.product = await result.json()
  }
}
</script>

<style lang="css" scoped>
</style>
