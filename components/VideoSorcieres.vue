<template>
  <div class="VideoSorcieres">
    <div class="embed-container">
      <iframe src="https://www.youtube.com/embed/taLPgu72eic" allowfullscreen="" frameborder="0"></iframe>
    </div>
    <div class="VideoCredits">Crédits Vidéo © Marion Chataing</div>
  </div>
</template>

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
