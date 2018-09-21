<template>
  <div>
    <navbar></navbar>
    <header class="Header">
      <b-img src="/header-home-bg.jpg" fluid-grow ></b-img>
      <div class="Header-jumbofon">
        <b-row>
          <b-col
            lg="6"
            md="7"
            sm="8"
            xs="12">
            <h1>Messieurs dames, souriez!</h1>
            <b-img src="/logo-header.png" fluid></b-img>
            <h1>va vous raconter une histoire!</h1>
          </b-col>
        </b-row>

      </div>
    </header>
    <div class="container">
      <section class="Teaser">
        <b-row>
          <b-col md="4" xs="12">
            <p class="Teaser-lead">Luca Marchesini est un conteur italien (mais aussi franco-et-hispano-phone) installé à Montpellier depuis 2009. Sa parole est inventive, voyageuse et bonne franquette. Ça vous intrigue? Voici un petit extrait!</p>
          </b-col>
          <b-col
            md="7"
            offset-md="1"
            xs="12">
            <div class="embed-container">
              <iframe src="https://www.youtube.com/embed/taLPgu72eic" allowfullscreen="" frameborder="0"></iframe>
            </div>
            <div class="Teaser-videoCredits">Crédits Vidéo © Marion Chataing</div>

            <div class="Claim">
              <div class="Claim-txt">
                  "Nous sommes vraiment très très contents de l'intervention de Luca! Et nous le remercions une fois de plus pour sa bonne humeur et son professionnalisme."
              </div>
              <p class="Claim-author">Nathalie Destre</p>
              <p class="Claim-organization">Association ¡Vamos! - Marvejols</p>
            </div>
          </b-col>
        </b-row>
      </section>
      <hr>
      <section class="Calendar">
        <h1>Les prochaines dates</h1>
        <b-table :items="gigs" :fields="fields"></b-table>
      </section>
      <hr>
      <section class="Shows">
        <h1>Les pestacles</h1>
        <div class="Shows-item">
          <b-row>
            <b-col
              lg="4"
              md="4"
              sm="5"
              xs="10">
              <b-img
                src="/show-sorcieres.jpg" rounded="circle">
              </b-img>
              <div class="Shows-itemContent">
                <h2>La Danse des Sorcières</h2>
                <b-badge variant="warning">Familial</b-badge>
                <p>Il ne faut jamais dire que les sorcières n’existent pas, car ça les dérangerait. Ou alors il faut être bien rusé... </p>
                <b-button variant="primary">En savoir plus »</b-button>
              </div>
            </b-col>
            <b-col
              lg="4"
              md="4"
              sm="5"
              xs="10">
              <b-img
                src="/show-europe.jpg" rounded="circle">
              </b-img>
              <div class="Shows-itemContent">
                <h2>Le Voyage en Europe</h2>
                <b-badge variant="success">Jeune public 4-8 ans</b-badge>
                <p>Chaque pays un un personnage, chaque personnage un conte. Tu veux monter?</p>
                <b-button variant="primary">En savoir plus »</b-button>
              </div>
            </b-col>
            <b-col
              lg="4" md="4" sm="5" xs="10">
              <b-img
                src="/show-lucavidesonsac.jpg" rounded="circle">
              </b-img>
              <div class="Shows-itemContent">
                <h2>Luca Vide son Sac!</h2>
                <b-badge variant="warning">Familial</b-badge>
                <p>Chaque pays un un personnage, chaque personnage un conte. Tu veux monter?</p>
                <b-button variant="primary">En savoir plus »</b-button>
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </div>
    <footer>
      <div class="container">
        <b-row>
          <b-col
            lg="4" md="4" sm="4" xs="12">
            <b-img src="logo-footer.png"></b-img>
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
  </div>
</template>

<script>
import moment from "moment";
import Navbar from "~/components/Navbar.vue";
import * as gigs from "../data/gigs.api";

export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      fields: {
        date: {
          label: "Date",
          formatter: date =>
            moment(date, "YYYY-MM-DD")
              .locale("fr")
              .format("D MMMM YYYY")
        },
        title: {
          label: "Spectacle"
        },
        location: {
          label: "Lieu"
        }
      },
      gigs: gigs.some(5)
    };
  }
};
</script>

<style lang="scss" scoped>
.Header {
  box-shadow: 0 0 20px 0 #656565;
  position: relative;
  overflow: hidden;
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
  max-width: 960px;
}

.Teaser-lead {
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
}

.Teaser-videoCredits {
  text-align: right;
  font-size: 0.7em;
  color: $color_grey;
}

.Claim {
  font-family: Georgia, serif;
  margin: 3.5em;
  text-align: right;
}

.Claim-txt {
  line-height: 1.1;
  font-size: 1.3em;
  color: $color_grey;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;
}

.Claim-author {
  color: darken($color_grey, 10%);
  margin: 0;
  font-size: 1em;
}

.Claim-organization {
  font-size: 0.8em;
  color: darken($color_grey, 10%);
}

.Shows-itemContent {
  margin-top: 15px;
}

footer {
  margin-top: 50px;
  background-color: $color_white;
  padding: 20px;
  color: $color_grey;
}
</style>

