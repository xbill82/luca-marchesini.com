<template>
  <div>
    <navbar></navbar>
    <header class="Header">
      <b-img src="~/assets/header-home-bg.jpg" fluid-grow ></b-img>
    </header>
    <section class="container">

    </section>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
.Header {
  box-shadow: 0 0 20px 0 #656565;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

