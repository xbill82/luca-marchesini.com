<template>
  <div>
    <navbar></navbar>
    <div class="Page">
      <nuxt/>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import SiteFooter from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    SiteFooter
  }
};
</script>

<style>
html {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
p {
  font-size: 120%;
}

section {
  margin-top: 50px;
}

h1,
h2 {
  font-family: "BeltaRegular"; /*'belta_lightlight';*/ /*'Loved by the King', cursive;*/
  text-transform: uppercase;
}

.container {
  max-width: 960px;
}

.Page {
  margin-top: 67px;
}
</style>

