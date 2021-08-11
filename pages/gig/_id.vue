<template>
  <div class="GigPage">
    <header>
      <a :href="`/show/${gig.showName}`">
        <div
          class="GigPage-map"
          :style="`background: url('/headers/header-${gig.showName}.jpg')`"
        ></div>
      </a>
      <div class="Header-jumbofon">
        <b-row>
          <b-col lg="6" md="7" sm="8" xs="12" offset-lg="1">
            <a v-if="gig.showName" :href="`/show/${gig.showName}`">
              <h1><i class="icon-star"></i> {{ gig.title }}</h1>
            </a>
            <h1 v-else><i class="icon-star"></i> {{ gig.title }}</h1>
          </b-col>
        </b-row>
      </div>
    </header>
    <div class="container">
      <section class="GigPage-content">
        <div class="GigPage-element">
          <i class="icon-calendar"></i>
          <div class="GigPage-element--content">
            <div class="GigPage-element--key">Date</div>
            <div class="GigPage-element--value">
              {{ formatGigDate(gig.date) }}
            </div>
          </div>
        </div>
        <div v-if="gig.time" class="GigPage-element">
          <i class="icon-clock"></i>
          <div class="GigPage-element--content">
            <div class="GigPage-element--key">Heure</div>
            <div>{{ formatGigTime(gig.time) }}</div>
          </div>
        </div>
        <div class="GigPage-element">
          <i class="icon-location"></i>
          <div class="GigPage-element--content">
            <div class="GigPage-element--key">Lieu</div>
            <div>{{ gig.location }}</div>
            <div class="GigPage-element--address" v-if="gig.address">
              <a :href="gig.mapUrl" target="_blank">{{ gig.address }}</a>
            </div>
          </div>
        </div>
        <div v-if="gig.parentEvent" class="GigPage-element">
          <i class="icon-flag"></i>
          <div class="GigPage-element--content">
            <div class="GigPage-element--key">Cadre</div>
            <a v-if="gig.parentEventUrl" :href="gig.parentEventUrl">{{
              gig.parentEvent
            }}</a>
            <div v-else>{{ gig.parentEvent }}</div>
          </div>
        </div>
        <div v-if="gig.price" class="GigPage-element">
          <i class="icon-money"></i>
          <div class="GigPage-element--content">
            <div class="GigPage-element--key">Prix</div>
            <div>{{ gig.price }}</div>
          </div>
        </div>
        <div v-if="gig.showName" class="GigPage-goToShow">
          <b-button variant="primary" :to="`show/${gig.showName}`"
            >Accéder à la fiche du spectacle</b-button
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import * as gigs from "../../data/gigs.api";
import _ from "lodash";

export default {
  name: "GigPage",
  data() {
    return {
      gig: gigs.byId(this.$route.params.id),
    };
  },
  computed: {
    mapFile() {
      if (!this.gig.address) {
        return "";
      }
      return `https://res.cloudinary.com/luca-le-conteur/image/upload/v1538139097/${_.kebabCase(
        this.gig.address
      )}.png`;
    },
  },
  methods: {
    formatGigDate: gigs.formatDate,
    formatGigTime: gigs.formatTime,
  },
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
}

.GigPage-map {
  position: relative;
  z-index: -1;
  display: block;
  width: 100%;
  height: 350px;
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

.GigPage-content {
  margin-top: 40px;
}

.GigPage-element {
  width: 100%;
  display: flex;

  i {
    font-size: 3em;
    display: inline;
    color: $color_grey;
  }

  .GigPage-element--content {
    display: inline-block;
  }

  .GigPage-element--key {
    font-weight: 800;
  }

  .GigPage-element--address {
    font-style: italic;
    color: $color_darkgrey;
  }
}

.GigPage-goToShow {
  margin-top: 40px;
}
</style>

