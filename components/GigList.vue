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
      <nuxt-link :to="`/gig/${data.item.id}`">{{
        data.item.location
      }}</nuxt-link>
    </template>
  </b-table>
</template>

<script>
import * as gigs from "../data/gigs.api";

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
    formatGigDate: gigs.formatDate,
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $color_black;
  text-decoration: none;
}
</style>
