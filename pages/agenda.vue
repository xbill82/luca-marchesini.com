<template>
  <div class="Agenda">
    <header>
      <b-img src="/headers/header-calendar.jpg" fluid></b-img>
    </header>
    <div class="container">
      <gig-list
        :gigs="gigs">
      </gig-list>
    </div>
  </div>
</template>

<script>
import * as gigs from "../data/gigs.api";
import GigList from "~/components/GigList.vue";

export default {
  name: "Agenda",
  components: { GigList },
  data() {
    return {
      gigs: gigs.all
    };
  }
};
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  max-width: 1366px;
  margin: auto;
  box-shadow: 0 0 20px 0 #656565;
  margin-bottom: 40px;
}
</style>
