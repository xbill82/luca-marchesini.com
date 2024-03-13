<template>
  <b-table class="GigList" :items="gigs" :fields="fields">
    <template #cell(Date)="data">
      <nuxt-link :to="localePath({name: 'gig-id', params: {id: data.item.id}})">
        {{ formatGigDate(data.item.date) }}
      </nuxt-link>
    </template>
    <template #cell(Spectacle)="data">
      <nuxt-link :to="localePath({name: 'gig-id', params: {id: data.item.id}})">{{ data.item.title }}</nuxt-link>
    </template>
    <template #cell(Lieu)="data">
      <b-link :to="localePath({name: 'gig-id', params: {id: data.item.id}})">{{
        resolveLocation(data.item)
      }}</b-link>
    </template>
  </b-table>
</template>

<script>
import * as helpers from "../helpers";
import { getGeographicalInformation } from "../helpers";

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
</script>

<style lang="scss" scoped>
a {
  color: $color_black;
  text-decoration: none;
}
</style>
