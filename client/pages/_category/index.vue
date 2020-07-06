<template>
  <section v-if="product" class="container">
    <h1 class="title text-info font-weight-bold">
      {{ category }}
    </h1>
    <div class="row mt-4">
      <Product v-for="item in product.products" :key="item.name" :product="item" :category="product.category" />
    </div>
  </section>
</template>

<script>
import Product from '@/components/Product'

export default {
  components: {
    Product
  },
  async asyncData ({ params }) {
    const result = await fetch(`${process.env.baseUrl}all?category=${params.category}`)
    return {
      product: await result.json()
    }
  },
  computed: {
    category () {
      if (this.product.category) {
        return this.product.category.replace(/-/g, ' ')
      } else {
        return 'Загрузка...'
      }
    },
    title () {
      const route = this.$route.params.category
      const capitalizedRoute = route.charAt(0).toUpperCase() + route.slice(1)
      return capitalizedRoute.replace(/-/g, ' ')
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
