<template>
  <div>
    <a name="home"></a>
    <header class="Header">
      <img
        sizes="100vw"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-home-bg.jpg"
        class="img-fluid"
      />
      <div class="Header-jumbofon">
        <b-row>
          <b-col lg="6" md="7" sm="8" xs="12">
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
            <p class="Teaser-lead">
              Luca Marchesini est un conteur italien (mais aussi
              franco-et-hispano-phone) installé à Montpellier depuis 2009. Sa
              parole est inventive, voyageuse et bonne franquette. Ça vous
              intrigue? Voici un petit extrait!
            </p>
            <br />
            <div class="text-right">
              <b-button variant="primary" to="/videos"
                >Voir toutes les videos</b-button
              >
            </div>
          </b-col>
          <b-col md="7" offset-md="1" xs="12">
            <teaser-video
              youtube-id="YWcMT4do2v8"
              video-credits="Désirée Snackey"
            ></teaser-video>

            <div class="Claim">
              <div class="Claim-txt">
                "J'ai vu un conteur super chouette samedi, il est de
                Montpellier, super feeling avec les mômes, pêchu, belle
                présence, subtil, tout public, super spectacle convenant à toute
                la famille: Luca Marchesini"
              </div>
              <p class="Claim-author">Isabelle Bach</p>
              <p class="Claim-organization">Compagnie Mungo</p>
              <div class="text-right">
                <b-button variant="primary" to="/guestbook"
                  >Voir le livre d'or</b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </section>
      <section class="Calendar">
        <h1>Les prochaines dates</h1>
        <gig-list :gigs="gigs"> </gig-list>
        <div>
          <b-button variant="primary" to="/agenda"
            >Voir toutes les dates</b-button
          >
        </div>
      </section>
      <a name="shows"></a>
      <hr />
      <section class="Shows">
        <h1>Les spectacles</h1>
        <div class="Shows-item">
          <b-row>
            <b-col lg="4" md="4" sm="5" xs="10" class="mb-3">
              <router-link to="/show/sorcieres">
                <b-img src="/show-sorcieres.jpg" rounded="circle"> </b-img>
              </router-link>
              <div class="Shows-itemContent">
                <h2>La Danse des Sorcières</h2>
                <b-badge variant="warning">Familial</b-badge>
                <p>
                  Il ne faut jamais dire que les sorcières n’existent pas, car
                  ça les dérangerait. Ou alors il faut être bien rusé...
                </p>
                <b-button to="/show/sorcieres" variant="primary"
                  >En savoir plus »</b-button
                >
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="5" xs="10" class="mb-3">
              <router-link to="/show/lartderaterletrain">
                <b-img src="/show-lartderaterletrain.jpg" rounded="circle">
                </b-img>
              </router-link>
              <div class="Shows-itemContent">
                <h2>L'Art de Rater le Train</h2>
                <b-badge variant="info">Adulte 13+</b-badge>
                <p>
                  Face au choix, je reste bloqué. Puis, comme animé par une
                  force invisible...
                </p>
                <b-button to="/show/lartderaterletrain" variant="primary"
                  >En savoir plus »</b-button
                >
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="5" xs="10" class="mb-3">
              <router-link to="/show/otello">
                <b-img src="/show-otello.jpg" rounded="circle"> </b-img>
              </router-link>
              <div class="Shows-itemContent">
                <h2>Otello</h2>
                <b-badge variant="info">Adulte 13+</b-badge>
                <p>
                  Otello décide d'ouvrir un cinéma dans un petit village de
                  l'Italie d'après-guerre. Les gens sont éblouis: sa vie est
                  comme un film.
                </p>
                <b-button to="/show/otello" variant="primary"
                  >En savoir plus »</b-button
                >
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="5" xs="10" class="mb-3">
              <router-link to="/show/europe">
                <b-img src="/show-europe.jpg" rounded="circle"> </b-img>
              </router-link>
              <div class="Shows-itemContent">
                <h2>Le Voyage en Europe</h2>
                <b-badge variant="success">Jeune public 4-8 ans</b-badge>
                <p>
                  Chaque pays un un personnage, chaque personnage un conte. Tu
                  veux monter?
                </p>
                <b-button to="/show/europe" variant="primary"
                  >En savoir plus »</b-button
                >
              </div>
            </b-col>
            <b-col lg="4" md="4" sm="5" xs="10" class="mb-3">
              <router-link to="/show/lucavidesonsac">
                <b-img src="/show-lucavidesonsac.jpg" rounded="circle"> </b-img>
              </router-link>
              <div class="Shows-itemContent">
                <h2>Luca Vide son Sac!</h2>
                <b-badge variant="warning">Familial</b-badge>
                <p>
                  Chaque pays un un personnage, chaque personnage un conte. Tu
                  veux monter?
                </p>
                <b-button to="/show/lucavidesonsac" variant="primary"
                  >En savoir plus »</b-button
                >
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import * as gigs from "../data/gigs.api";
import GigList from "~/components/GigList.vue";
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "Home",
  components: { GigList, TeaserVideo },
  data() {
    return {
      gigs: gigs.some(5),
    };
  },
  methods: {
    formatGigDate: gigs.formatDate,
  },
};
</script>

<style lang="scss" scoped>
.Header {
  box-shadow: 0 0 20px 0 #656565;
  position: relative;
  overflow: hidden;
  // Yeah, this is a horrible hack
  height: 42vw;
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

.Teaser-lead {
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
}

.Claim {
  margin: 3.5em;
  text-align: right;
}

.Claim-txt {
  font-family: Georgia, serif;
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
</style>

