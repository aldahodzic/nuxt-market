<template>
  <section v-if="product" class="mt-4 container">
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
  async asyncData ({ params }) {
    const result = await fetch(`${process.env.baseUrl}all?category=${params.category}&product=${params.product}`)
    return {
      product: await result.json()
    }
  },
  computed: {
    category () {
      return this.$route.params.category
    },
    selectedProduct () {
      return this.$route.params.product
    },
    title () {
      return this.$route.params.product.replace(/-/g, ' ')
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
  head () {
    return {
      title: this.title
    }
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
