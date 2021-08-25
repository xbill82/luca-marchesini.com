<template>
  <show>
    <template slot="header">
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1624227385/header-barbenuit.png"
      />
    </template>
    <template slot="intro-lead">
      <strong>Il était une fois...</strong><br />
      ...un monsieur qui avait la barbe noire comme la nuit. On l’appelait
      Barbenuit. Sa barbe était tellement noire qu’elle faisait peur! Un jour,
      Barbenuit a connu une jeune fille. Il l’a trouvée tellement belle qu’il en
      est tombé raide amoureux. Alors il l’a invitée à une promenade dans le
      parc et elle... Elle a dit oui! C’était agréable de se promener ensemble
      et Barbenuit, plein de joie, a voulu lui faire un bisou. Mais la
      demoiselle a crié : - Aïe! Elle pique plus qu’une rose ta grosse barbe!
    </template>
    <template slot="intro-video">
      <!-- <teaser-video
        youtube-id="YWcMT4do2v8"
        video-credits="Désirée Snackey"
      ></teaser-video> -->
    </template>
    <template slot="description">
      Barbenuit est un exclu. Sa barbe, trop grosse, trop noire, trop piquante,
      effrayante, est le symbole de « ce que les autres ne veulent pas ». Ce
      dont les autres ont peur. Ce que les autres ne connaissent pas et ne
      veulent pas connaitre. Le thème de l’exclusion est à mes yeux extrêmement
      sensible et actuel. Il est abordé ici de façon symbolique, à travers le
      langage des contes, qui parle à notre soi intérieur. En plus de faire
      passer un bon moment au public, je souhaite avec ce spectacle donner une
      voix à ceux d’entre nous qui sont confrontés à cette problématique dans
      leur quotidien.
      <br /><br />
    </template>
    <template slot="info-age">Public adulte à partir de 11 ans</template>
    <template slot="info-duration">Approximativement 1h15</template>
    <template slot="info-more">
      <h1>Crédits</h1>
      <dl>
        <dt>Ecrit par</dt>
        <dd>Luca Marchesini</dd>
      </dl>
    </template>
    <template slot="btn-dl-file">
      <b-btn
        class="mb-3"
        to="/docs/dossier-barbenuit.pdf"
        variant="primary"
        target="_blank"
        >Télécharger le Dossier</b-btn
      ><br />
    </template>
    <template slot="wall-of-logos">
      <div class="mb-2">
        <img src="/logo-mpl.png" alt="" height="100" />
      </div>

      <em
        >Ce spectacle a bénéficié d'une résidence de création à Saint Julien du
        Verdon par l'association
        <a href="http://www.artetculturefabridepeiresc.com"
          >Art et Culture Fabri de Peiresc</a
        >
        de mars à mai 2018.</em
      >
    </template>
  </show>
</template>

<script>
import Show from "~/components/Show.vue";
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "LartderaterletrainPage",
  components: { Show, TeaserVideo },
};
</script>

<style>
</style>