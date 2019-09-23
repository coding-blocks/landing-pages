<template>
  <header>
    <nav class="navbar navbar-light bg-light main-nav">
      <div>
        <nuxt-link class="navbar-brand" to="/">
          <img
            src="https://minio.codingblocks.com/amoeba/hellointern.svg"
            class="d-inline-block align-top"
            alt
          />
        </nuxt-link>
      </div>
      <div class="d-flex nav-links">
        <nuxt-link to="/courses">All Courses</nuxt-link>
        <a href="/app/classroom">My Classroom</a>
        <a href="/app/jobs">Get Hired</a>
      </div>
      <div class="d-flex align-items-center">
        <!-- <img class="ml-2 pointer" src="https://minio.codingblocks.com/amoeba/alert.svg" alt=""> -->
        <!-- <a class="ml-3" href="https://dukaan.codingblocks.com">
          <img src="https://minio.codingblocks.com/amoeba/cart.svg" alt="">
        </a> -->

        <a class="button-solid ml-4" href="/app">Get Started</a>
      </div>
      
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 2.5% 7%;
}
.nav-links > a {
  margin-right: 2rem;
}

.nav-links {
  font-size: 1.2rem;
  width: 50%;
}
</style>