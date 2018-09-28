<template>
  <div class="ContactPage">
    <header>
      <b-img src="/headers/header-contact.png" fluid></b-img>
    </header>
    <div class="container">
      <b-row>
        <b-col>
          <a href="mailto:contact@luca-marchesini.com"><span class="icon-envelope"></span>&nbsp;contact@luca-marchesini.com</a>
          <br>
          <a href="tel:+33633596151"><span class="icon-phone"></span>&nbsp;+33 (0) 6 33 59 61 51</a>
        </b-col>
        <b-col>

        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  name: "ContactPage",
  components: {
    Contact
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0 20px 0 #656565;
  margin-bottom: 30px;
}
</style>


