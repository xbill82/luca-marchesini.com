<template>
  <show>
    <template slot="header">
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-lucavidesonsac.jpg">
    </template>
    <template slot="intro-lead">
      Pourquoi se priver de liberté quand on peut tout simplement raconter les histoires qui nous viennent à l’esprit? Mais c’est pas que de mon esprit que je parle, non. C’est de l’esprit (ou de l’âme) qui se dégage du moment que l’on passe ensemble, public et conteur. Parfois on dirait que les histoires étaient là avant qu’on arrive, alors on a qu'à les laisser venir. Les histoires, elles nous choisissent, c’est pour ça qu’elles nous viennent à l’esprit.
    </template>
    <template slot="intro-video">
      <teaser-video
        youtube-id="mmErKeWryRI"
        video-credits="Perrine Boyer"
      ></teaser-video>
    </template>
    <template slot="description">Une suite d’histoires qui se dessine au moment où le spectacle commence ou bien que l’on peut piocher au préalable de mon répertoire. Si j'ai assez d’avance, je peux aussi travailler des nouvelles histoires dans le but de rapprocher la séance à un thème donné (dicté par le cadre d’un festival ou d’un événement). La durée aussi peut varier en fonction des publics, des âges ou des impératifs de l’organisation.
Ça peut se faire en plein air, en salle ou en balade, il suffit de demander.</template>
    <template slot="info-age">public familial à partir de 4 ans.</template>
    <template slot="info-duration">approximativement 60 minutes (ça peut varier en fonction du niveau d'attention du public).</template>
    <template slot="btn-dl-file">
      <b-btn to="/docs/tech-lucavidesonsac.pdf" variant="primary" target="_blank"><span class="glyphicon glyphicon-file"></span> Télécharger la Fiche Technique</b-btn>
    </template>
  </show>
</template>

<script>
import Show from "~/components/Show.vue";
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "LucaVideSonSac",
  components: { Show, TeaserVideo }
};
</script>
