<template>
  <show>
    <template slot="header">
      <b-img src="/headers/header-europe.jpg" fluid></b-img>
    </template>
    <template slot="intro-lead">
      Il y a un train, comme ceux d’antan, qui parcourt toute l’Europe. Il n’a pas peur de la mer, des montagnes, de la neige ou de la chaleur: lui, il voyage en s’arrêtant dans des lieux inattendus, des villages cachés où nous attendent des personnages qui ont des histoires à raconter. Chaque pays un un personnage, chaque personnage un conte. Tu veux monter?
    </template>
    <template slot="description">Ce spectacle est né d’un projet d’atelier itinérant d’expression artistique. Pendant l’hiver 2010 j’ai voyagé avec Perrine Boyer en Argentine et au Chili, pour travailler avec des organisations d’aide aux enfants en difficultés.
Nous avons proposé dans les écoles, orphelinats et centres médicaux, un spectacle de narration orale associé à des ateliers d’expression corporelle et plastique.
Ce spectacle a évolué pendant les deux mois de voyage, se nourrissant des regards des centaines d’enfant qu’on a rencontrés. Je le propose aujourd'hui aux enfants de mon propre continent.</template>
    <template slot="info-age">jeune public de 4 à 8 ans. .</template>
    <template slot="info-duration">approximativement 40 minutes (ça peut varier en fonction du niveau d'attention du public).</template>
    <template slot="btn-dl-file">
      <b-btn to="/docs/tech-europe.pdf" variant="primary" target="_blank"><span class="glyphicon glyphicon-file"></span> Télécharger la Fiche Technique</b-btn>
    </template>
  </show>
</template>

<script>
import Show from "~/components/Show.vue";

export default {
  name: "LucaVideSonSac",
  components: { Show }
};
</script>
