<template>
  <div class="TeaserVideo">
    <div class="embed-container">
      <iframe :src="ytUrl" allowfullscreen="" frameborder="0"></iframe>
    </div>
    <div
      v-if="videoCredits"
      class="VideoCredits">Crédits Vidéo © {{ videoCredits }}</div>
  </div>
</template>

<script>
export default {
  name: "TeaserVideo",
  props: {
    youtubeId: {
      type: String,
      required: true
    },
    videoCredits: {
      type: String,
      required: false
    }
  },
  computed: {
    ytUrl() {
      return `https://www.youtube.com/embed/${this.youtubeId}`;
    }
  }
};
</script>


<style lang="scss" scoped>
/* Courtesy of embedresponsively.com */
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.VideoCredits {
  text-align: right;
  font-size: 0.7em;
  color: $color_grey;
}
</style>
