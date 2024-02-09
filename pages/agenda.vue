<template>
  <div class="Agenda">
    <header>
      <img
        sizes="100vw"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-calendar.jpg"
        class="img-fluid">
    </header>
    <div class="container">
      <div v-if="loading" class="text-center">
        <b-spinner />
      </div>
      <div v-else>
        <b-alert v-if="error" variant="warning">{{ error }}</b-alert>
        <gig-list
          v-else
          :gigs="gigs">
        </gig-list>
      </div>
    </div>
  </div>
</template>

<script>
import backend from "../data/backend.notion";
import GigList from "~/components/GigList.vue";

export default {
  name: "AgendaPage",
  components: { GigList },
  data() {
    return {
      error: null,
      loading: true,
      gigs: []
    };
  },
  async fetch() {
    try {
      const eventsById = await backend.fetchAllEvents();
      const showsById = await backend.fetchAllShows();
      const gigsById = await backend.fetchAllGigs(showsById, eventsById)
      this.gigs = Object.values(gigsById)
    } catch (error) {
      console.error(error)
      this.error = "Une erreur s'est produite pendant le chargement des dates"
    }
    this.loading = false
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
