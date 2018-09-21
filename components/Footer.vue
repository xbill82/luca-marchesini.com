<template>
  <footer>
    <div class="container">
      <b-row>
        <b-col
          lg="4" md="4" sm="4" xs="12">
          <b-img src="/logo-footer.png"></b-img>
          <a href="mailto:contact@luca-marchesini.com"><span class="icon-envelope"></span>&nbsp;contact@luca-marchesini.com</a>
          <br>
          <a href="tel:+33633596151"><span class="icon-phone"></span>&nbsp;+33 (0) 6 33 59 61 51</a>
        </b-col>
        <b-col
          lg="4" md="4" sm="4" xs="12"
          offset-lg="3" offset-md="3" offset-sm="3">
          <h3>Plan du site</h3>
          <ul class="list-unstyled">
            <li><a href="">Accueil</a></li>
            <li><a href="">Agenda</a></li>
            <li><a href="">Spectacles</a></li>
            <li><a href="">Livre d'Or</a></li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

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
