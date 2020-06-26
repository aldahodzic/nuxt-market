<template>
  <div v-if="product" class="container mt-4">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <h3>Цена: {{ product.price }}</h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: null
  }),
  async created () {
    const currentProduct = this.$route.params.product.replace(/-/g, ' ')
    const result = await fetch(`${process.env.baseUrl}all?category=${this.$route.params.category}`)
    this.product = (await result.json()).products.find(item => item.name.toLowerCase() === currentProduct.toLowerCase())
  }
}
</script>

<style lang="css" scoped>
</style>
