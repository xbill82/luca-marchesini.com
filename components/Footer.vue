<template>
  <footer>
    <div class="container">
      <b-img src="/logo-footer.png"></b-img>
      <b-row>
        <b-col lg="4" md="4" sm="4" xs="12">
          <contact></contact>
        </b-col>
        <b-col
          lg="4"
          md="4"
          sm="4"
          xs="12"
          offset-lg="3"
          offset-md="3"
          offset-sm="3"
        >
          <h3>Plan du site</h3>
          <ul class="list-unstyled">
            <li><a href="/agenda">Agenda</a></li>
            <li><a href="/#shows">Spectacles</a></li>
            <li><a href="/videos">Videos</a></li>
            <li><a href="/guestbook">Livre d'Or</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/pro-space">Espace pro</a></li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  name: "FooterSection",
  components: {
    Contact,
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 50px;
  background-color: $color_lightgrey;
  padding: 20px;
  color: $color_grey;

  a {
    color: $color_indigo;
  }
}
</style>
