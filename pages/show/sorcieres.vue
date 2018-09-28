<template>
  <div class="SorcieresPage">
    <header>
      <b-img src="/headers/header-sorcieres.jpg" fluid></b-img>
    </header>
    <div class="container">
      <b-row>
        <b-col
          md="10"
          offset-md="1"
          xs="12">
          <section class="Intro">
            <p class="Intro-lead">
              Les bois d’Italie et de Galice, au plus profond de la nuit, abritent d’étranges farandoles autour de grands feux de camp. Tout le monde a entendu parler de ça: ces femmes là, on les appelle « le macare », « le strie », « las meigas ». Leurs danses sont rythmées par de mystérieuses paroles magiques... Peu d’entre nous ont eu le malheur (ou la chance) de les rencontrer; ceux qui en sont revenus l’ont raconté. Et leurs histoires n’ont jamais cessé de nous faire peur, d’exercer sur nous un charme magique...
            </p>
            <video-sorcieres></video-sorcieres>
          </section>
        </b-col>
      </b-row>
      <hr>
      <section class="Description">
        <h1>Description</h1>
        <p>La Danse des Sorcières est un spectacle familial où l’on va titiller l’imaginaire mystérieux qui vit autour des êtres surnaturels hostiles: sorcières, ogres, géants méchants ou stupides, lutins malicieux, etc… Une ambiance inquiétante mais également beaucoup de suspense et d’humour dans ces contes souvent facétieux, où la ruse du héros le sauve in-extrémis du danger. Ce spectacle est destiné au jeune public à partir de 5 ans et s’adapte à tous les créneaux d’âge.</p>
      </section>
      <hr>
      <section class="Info">
        <b-row>
          <b-col>
            <h1>Informations</h1>
            <dl>
              <dt>Tranche d'âge:</dt>
              <dd>public familial à partir de 5 ans.</dd>
              <dt>Durée:</dt><dd> approximativement 50 minutes (ça peut varier en fonction du niveau d'attention du public).</dd>
            </dl>
            <b-btn to="/docs/tech-sorcieres.pdf" variant="primary" target="_blank"><span class="glyphicon glyphicon-file"></span> Télécharger la Fiche Technique</b-btn>
            &nbsp;
            <b-btn to="/contact" variant="info">Contact</b-btn>
          </b-col>
          <b-col>
            <div class="Claim">
              <div class="Claim-txt"><em>"Sous une grande église, sur un petit banc, il conte.
                Il conte les sorcières, les humains, les folies, les rêves, les lutins, les peurs et les envies.
                Il conte et nous rions, nous écoutons attentivement, avec joie. Et je les vois les sourires des gens, je les entends leurs rires, et je sens l'émotion qui est parmi nous, grâce à ce moment de partage si beau que nous vivons.
                Merci Luca pour ta générosité et ce beau voyage!
                Sous une grande église, sur un petit banc, un formidable conteur conte."</em>
              </div>
              <p class="Claim-author">Lou Barriol</p>
              <p class="Claim-organization">Chargée de Programmation Artistique - Festival des 4 Saisons - Saint-Jean-de-la-Blaquière (34)</p>
            </div>
          </b-col>
        </b-row>
      </section>
    </div>
  </div>
</template>

<script>
import VideoSorcieres from "~/components/VideoSorcieres.vue";

export default {
  name: "SorcieresPage",
  components: { VideoSorcieres }
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 0 20px 0 #656565;
  margin-bottom: 30px;
}

.Intro-lead {
  font-size: 21px;
  margin-bottom: 20px;
  font-weight: 300;
  line-height: 1.4;
}

.Claim {
  font-family: Georgia, serif;
  margin: 0 3.5em;
  text-align: right;
}

.Claim-txt {
  line-height: 1.1;
  font-size: 1.3em;
  color: $color_grey;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;
}

.Claim-author {
  color: darken($color_grey, 10%);
  margin: 0;
  font-size: 1em;
}

.Claim-organization {
  font-size: 0.8em;
  color: darken($color_grey, 10%);
}
</style>
