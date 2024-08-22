<template>
  <div class="VideosPage">
    <header>
      <div class="VideosPage-headerBg"></div>
      <div class="Header-jumbofon">
        <b-row>
          <b-col lg="6" md="7" sm="8" xs="12" offset-lg="1">
            <h1>Les Videos</h1>
          </b-col>
        </b-row>
      </div>
    </header>
    <div class="container mt-3">
      <div class="videos">
        <teaser-video
          youtube-id="YWcMT4do2v8"
          video-credits="Désirée Snackey"
        ></teaser-video>
        <teaser-video
          youtube-id="Cy8I4DlsQyc"
          credits="Ariel F. Verba"
        />
        <teaser-video
          youtube-id="yrVHRF-MZ7A"
          video-credits="Ariel Fernández Verba"
        ></teaser-video>
        <teaser-video
          youtube-id="SqMRFWZwTE4"
          video-credits="Ariel Fernández Verba"
        ></teaser-video>
        <teaser-video
          youtube-id="taLPgu72eic"
          video-credits="Marion Chataing"
        ></teaser-video>
        <teaser-video
          youtube-id="mmErKeWryRI"
          video-credits="Perrine Boyer"
        ></teaser-video>
      </div>
    </div>
  </div>
</template>

<script>
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "VideosPage",
  components: { TeaserVideo },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px 0 #656565;
  max-height: 300px;
}
.VideosPage-headerBg {
  background: url("https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-coloc-small.png")
    center;
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
    font-size: 6em;
  }
}
</style>
