<template>
  <div class="Agenda">
    <header>
      <img
        sizes="100vw"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-calendar.jpg"
        class="img-fluid">
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
  name: "AgendaPage",
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
