<template>
  <div class="GigPage">
    <header>
      <b-img src="/maps/sarmede.png" fluid></b-img>
      <div class="Header-jumbofon">
        <b-row>
          <b-col
            lg="6" md="7" sm="8" xs="12"
            offset-lg="1">
            <h1>{{ gig.title }}</h1>
          </b-col>
        </b-row>
      </div>
    </header>
    <div class="container">
      <div class="GigPage-date">
        Date: {{ formatGigDate(gig.date) }}
      </div>
      <div v-if="gig.time" class="GigPage-time">
        Heure: {{ formatGigTime(gig.time) }}
      </div>
      <div class="GigPage-location">
        Lieu: {{ gig.location }}
      </div>
      <div v-if="gig.address" class="GigPage-address">
        Adresse: {{ gig.address }}
      </div>
      <div v-if="gig.parentEvent" class="GigPage-parentEvent">
        Cadre: <a v-if="gig.parentEventUrl" :href="gig.parentEventUrl">{{ gig.parentEvent }}</a>
        <span v-else>{{ gig.parentEvent }}</span>
      </div>
      <div v-if="gig.price" class="GigPage-price">
        Prix: {{ gig.price }}
      </div>
      <div v-if="gig.showName" class="GigPage-showName">
        <b-button :to="`show/${gig.showName}`">Accéder à la fiche du spectacle</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as gigs from "../../data/gigs.api";

export default {
  name: "GigPage",
  data() {
    return {
      gig: gigs.byId(this.$route.params.id)
    };
  },
  methods: {
    formatGigDate: gigs.formatDate,
    formatGigTime: gigs.formatTime
  }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0 20px 0 #656565;
  max-height: 300px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );

  img {
    position: relative;
    z-index: -1;
    display: block;
    width: auto;
  }
}

.Header-jumbofon {
  position: absolute;
  bottom: 0;
  padding-top: 30px;
  width: 100%;

  h1 {
    margin: 0 0 0 4%;
    color: $color_white;
    font-size: 3em;
  }
}
</style>

