<template>
  <section v-if="product" class="container">
    <h1 class="title text-info font-weight-bold">
      {{ category }}
    </h1>
    <div class="row mt-4">
      <Product v-for="item in product.products" :key="item.name" :product="item" />
    </div>
  </section>
  <Loader v-else class="mt-5" size="5rem" />
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
  computed: {
    category () {
      return this.product.category.replace(/-/g, ' ')
    }
  },
  async created () {
    const result = await fetch(`${process.env.baseUrl}all?category=${this.$route.params.category}`)
    this.product = await result.json()
  }
}
</script>
