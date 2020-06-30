<template>
  <section v-if="product" class="mt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="item in breadcrumbs" :key="item.name" class="breadcrumb-item">
          <nuxt-link :to="item.path" class="text-capitalize" active-class="text-muted" exact>
            {{ item.name }}
          </nuxt-link>
        </li>
      </ol>
    </nav>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <h3>Цена: {{ product.price }}</h3>
  </section>
</template>

<script>
export default {
  data: () => ({
    product: null
  }),
  computed: {
    category () {
      return this.$route.params.category
    },
    selectedProduct () {
      return this.$route.params.product
    },
    breadcrumbs () {
      return [
        {
          name: 'Главная',
          path: '/'
        },
        {
          name: this.category.replace(/-/g, ' '),
          path: `/${this.category}`
        },
        {
          name: this.selectedProduct,
          path: `/${this.category}/${this.selectedProduct}`
        }
      ]
    }
  },
  async created () {
    const result = await fetch(`${process.env.baseUrl}all?category=${this.category}&product=${this.selectedProduct}`)
    this.product = await result.json()
  }
}
</script>

<style lang="css" scoped>
  .link:first-child {
    padding-left: 0 !important
  }

  .link::after {
    content: '/'
  }
</style>
