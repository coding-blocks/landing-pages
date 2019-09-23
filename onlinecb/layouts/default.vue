<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
@import "https://use.fontawesome.com/releases/v5.0.8/css/all.css";
@import "https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,800";
</style>

<script>
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
