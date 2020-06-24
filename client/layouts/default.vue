<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Nuxt-market</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <nuxt-link
            v-for="link in links"
            :key="link.route"
            tag="li"
            :to="link.route"
            active-class="active"
            class="nav-item"
            exact
          >
            <a class="nav-link">{{ link.name }}</a>
          </nuxt-link>
        </ul>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        route: '/',
        name: 'Home'
      },
      {
        route: '/kugoo',
        name: 'Kugoo'
      }
    ]
  })
}
</script>
