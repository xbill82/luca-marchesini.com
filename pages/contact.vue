<template>
  <div class="ContactPage">
    <header>
      <b-img src="/headers/header-contact.png" fluid></b-img>
    </header>
    <div class="container">
      <b-row>
        <b-col md="4">
          <div class="ContactData">
            <a href="mailto:contact@luca-marchesini.com"><span class="icon-envelope"></span>&nbsp;contact@luca-marchesini.com</a>
            <br>
            <a href="tel:+33633596151"><span class="icon-phone"></span>&nbsp;+33 (0) 6 33 59 61 51</a>
          </div>
        </b-col>
        <b-col md="8">
          <signup-form></signup-form>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Contact from "~/components/Contact.vue";
import SignupForm from "~/components/MailingListSignupForm.vue";

export default {
  name: "ContactPage",
  components: {
    Contact,
    SignupForm
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0 20px 0 #656565;
  margin-bottom: 30px;
}
.ContactData {
  margin-top: 90px;
}
</style>


