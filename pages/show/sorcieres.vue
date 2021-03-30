<template>
  <show>
    <template slot="header">
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-sorcieres.jpg"
      />
    </template>
    <template slot="intro-lead">
      Les bois d’Italie, au plus profond de la nuit, abritent d’étranges
      farandoles autour de grands feux de camp. Tout le monde a entendu parler
      de ça: ces femmes là, on les appelle « le macare », « le strie ». Leurs
      danses sont rythmées par de mystérieuses paroles magiques... Peu d’entre
      nous ont eu le malheur (ou la chance) de les rencontrer; ceux qui en sont
      revenus l’ont raconté. Et leurs histoires n’ont jamais cessé de nous faire
      peur, d’exercer sur nous un charme étrange...
    </template>
    <template slot="intro-video">
      <teaser-video
        youtube-id="YWcMT4do2v8"
        video-credits="Désirée Snackey"
      ></teaser-video>
    </template>
    <template slot="description"
      >La Danse des Sorcières est un spectacle familial où l’on va titiller
      l’imaginaire mystérieux qui vit autour des êtres surnaturels hostiles:
      sorcières, ogres, géants méchants ou stupides, lutins malicieux, etc… Les
      histoires, situées autour des superstitions italiennes, produisent une
      ambiance inquiétante mais également beaucoup de suspense et d’humour. Dans
      ces contes souvent facétieux, la ruse du héros le sauve in-extrémis du
      danger. Ce spectacle est destiné au jeune public à partir de 5 ans et
      s’adapte à tous les créneaux d’âge. <br /><br />
      Ce spectacle peut être joué avec ou sans plan de feux. Voici un extrait de
      sa version "tout-terrain".
      <br /><br />

      <teaser-video
        youtube-id="taLPgu72eic"
        video-credits="Marion Chataing"
      ></teaser-video>
    </template>
    <template slot="info-age">public familial à partir de 5 ans.</template>
    <template slot="info-duration"
      >approximativement 50 minutes (ça peut varier en fonction du niveau
      d'attention du public).</template
    >
    <template slot="info-more">
      <h1>Crédits</h1>
      <dl>
        <dt>Œil extérieur</dt>
        <dd>Serge Valentin</dd>
        <dt>Création lumière avec l'aide de</dt>
        <dd>Roland Cerdelli</dd>
      </dl>
    </template>
    <template slot="btn-dl-file">
      <b-btn to="/docs/dossier-sorcieres.pdf" variant="primary" target="_blank"
        >Télécharger le Dossier</b-btn
      ><br />
      <b-btn
        class="mt-1"
        to="/docs/tech-sorcieres.pdf"
        variant="primary"
        target="_blank"
        >Télécharger la fiche technique</b-btn
      >
    </template>
    <template slot="claim-txt">
      "Sous une grande église, sur un petit banc, il conte. Il conte les
      sorcières, les humains, les folies, les rêves, les lutins, les peurs et
      les envies. Il conte et nous rions, nous écoutons attentivement, avec
      joie. Et je les vois les sourires des gens, je les entends leurs rires, et
      je sens l'émotion qui est parmi nous, grâce à ce moment de partage si beau
      que nous vivons. Merci Luca pour ta générosité et ce beau voyage! Sous une
      grande église, sur un petit banc, un formidable conteur conte."
    </template>
    <template slot="claim-author">Lou Barriol</template>
    <template slot="claim-organization"
      >Chargée de Programmation Artistique - Festival des 4 Saisons -
      Saint-Jean-de-la-Blaquière (34)</template
    >
    <template slot="wall-of-logos">
      <div class="mb-2 mt-3">
        <img src="/logo-mpl.png" alt="" height="100" />
      </div>

      <em
        >Ce spectacle a bénéficié d'une résidence de création au Théâtre Gérard
        Philippe (Montpellier) en octobre 2019.</em
      >
    </template>
  </show>
</template>

<script>
import Show from "~/components/Show.vue";
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "SorcieresPage",
  components: { Show, TeaserVideo },
};
</script>
