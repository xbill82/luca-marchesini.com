<template>
  <b-table class="GigList" :items="gigs" :fields="fields">
    <template #cell(Date)="data">
      <nuxt-link :to="`/gig/${data.item.id}`">
        {{ formatGigDate(data.item.date) }}
      </nuxt-link>
    </template>
    <template #cell(Spectacle)="data">
      <nuxt-link :to="`/gig/${data.item.id}`">{{ data.item.title }}</nuxt-link>
    </template>
    <template #cell(Lieu)="data">
      <b-link :to="`/gig/${data.item.id}`">{{
        resolveLocation(data.item)
      }}</b-link>
    </template>
  </b-table>
</template>

<script>
import * as helpers from "../helpers";

export default {
  name: "GigList",
  props: {
    gigs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fields: ["Date", "Spectacle", "Lieu"],
    };
  },
  methods: {
    formatGigDate: helpers.formatDate,
    resolveLocation(gig) {
      if (!gig) return
      let location = gig.legacyLocation
      if (gig.parentEvent || gig.venue) {
        location = `${gig.parentEvent ? gig.parentEvent : gig.venue} (${getGeographicalInformation(gig)})`;
      }
      return location
    }
  }
};

function getGeographicalInformation(gig) {
  if (!gig.country || gig.country !== 'FR') {
    return `${gig.city}, ${gig.country}`;
  } else if (gig.city) {
    return `${gig.city}, ${gig.region}`
  }
}
</script>

<style lang="scss" scoped>
a {
  color: $color_black;
  text-decoration: none;
}
</style>
