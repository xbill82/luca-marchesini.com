<template>
  <div>
    <navbar></navbar>
    <header class="Header">
      <b-img src="~/assets/header-home-bg.jpg" fluid-grow ></b-img>
      <div class="Header-jumbofon">
        <b-row>
          <b-col
            lg="6"
            md="7"
            sm="8"
            xs="12">
            <h1>Messieurs dames, souriez!</h1>
            <b-img src="~/assets/logo-header.png" fluid></b-img>
            <h1>va vous raconter une histoire!</h1>
          </b-col>
        </b-row>

      </div>
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

<style lang="scss" scoped>
.Header {
  box-shadow: 0 0 20px 0 #656565;
  position: relative;
}

.Header-jumbofon {
  position: absolute;
  bottom: 0;
  padding-top: 30px;
  width: 100%;

  h1 {
    margin: 0 0 0 4%;
    color: $color_white;
    font-size: 2.2em;
  }
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

