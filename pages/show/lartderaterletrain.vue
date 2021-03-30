<template>
  <show>
    <template slot="header">
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1617091096/header-lartderaterletrain.png"
      />
    </template>
    <template slot="intro-lead">
      « Face au choix, la seule chose que je sais faire, c’est ne rien faire.
      »<br />
      Le plus souvent, pour moi, le choix, c’était ça: un blocage. Attendre que
      ça passe. Attendre de ne plus avoir le choix. Mais au moment où j’ai
      décidé d’aller vivre en Andalousie, seul, loin de ma famille et de mes
      proches, quelque chose a basculé.
      <br /><br />
      « Comme animé par une force invisible... »<br />Me voilà projeté dans
      cette ville où tout est possible: Granada, où les rencontres se produisent
      magiquement et les opportunités surgissent au coin d’une rue, à la table
      d’une terrasse. Comme si la ville œuvrait secrètement pour que les indécis
      basculent vers le destin qui est le leur.
    </template>
    <!-- <template slot="intro-video">
      <teaser-video
        youtube-id="YWcMT4do2v8"
        video-credits="Désirée Snackey"
      ></teaser-video>
    </template> -->
    <template slot="description">
      L’Art de Rater le Train est un voyage inspiré des aventures que j’ai vécu
      en allant vivre à Granada, en Andalousie, où j’ai habité trois ans avant
      de partir m’installer à Montpellier. <br />
      Là bas, j’ai découvert l’art du conte, la poésie, l’improvisation
      théâtrale et l’amour: rien que ça! Et le tout dans un tourbillon de
      rencontres hasardeuses, aventures imprévues, trains ratés, valises
      perdues. Des choix impossibles résolus avec l’aide parfois d’une « force
      invisible », parfois d’un poète connu dans la rue. C’est la confrontation
      avec le problème du choix, car « choisir, c’est renoncer » (dixit Kamel
      Guennoun), qui m’a changé et fait grandir. Cette époque de ma vie a été un
      voyage initiatique.
    </template>
    <template slot="info-age">Public adulte à partir de 13 ans</template>
    <template slot="info-duration">Approximativement 1h15</template>
    <template slot="info-more">
      <h1>Crédits</h1>
      <dl>
        <dt>Ecrit par</dt>
        <dd>Luca Marchesini, Danilo Facelli</dd>
        <dt>Œil extérieur</dt>
        <dd>Miguel Rojo, Patricio Nusshold</dd>
        <dt>Musiques de</dt>
        <dd>Mártires del Compás, Jorge Drexler, The Clash</dd>
        <dt>Poèmes de</dt>
        <dd>Danilo Facelli, Àngel Taliàn</dd>
      </dl>
    </template>
    <template slot="btn-dl-file">
      <b-btn
        class="mb-3"
        to="/docs/dossier-lartderaterletrain.pdf"
        variant="primary"
        target="_blank"
        >Télécharger le Dossier</b-btn
      ><br />
    </template>
    <template slot="wall-of-logos">
      <div class="mb-2">
        <img src="/logo-laplana.jpg" alt="" />
        <img src="/logo-mpl.png" alt="" height="100" />
      </div>

      <em
        >Ce spectacle a bénéficié d'une résidence de création à la Fundació la
        Plana (Barcélone) en mars 2019 et bénéficiera d'une résidence de
        création au Théâtre Gérard Philippe (Montpellier) en janvier 2021.</em
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