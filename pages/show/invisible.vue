<template>
  <show>
    <template slot="header">
      <div class="LogoWrapper">
        <LogoInvisible class="LogoCentered" />
      </div>
    </template>
    <template slot="intro-lead">
      Les Contes et les Mythes sont un produit du rêve. Le temps de la veillée
      contée, comme le temps des rêves, est un moment privilégié dans lequel
      nous sommes en contact avec tout ce qui vit à l’intérieur de nous-mêmes,
      ce bouillonnement mystérieux au dessus de notre sphère consciente. Mais
      nos sens aussi peuvent nous projeter dans cet espace et, parmi eux, aucun
      n’a le pouvoir évocateur de l’olfaction. Avec L’Invisible, nous avons
      expérimenté avec l’interaction entre l’olfaction et le conte, projetant
      ainsi le public dans son inconscient profond.
    </template>
    <template slot="intro-video">
      <teaser-video youtube-id="iIXYsUBnoSk" video-credits="Ariel F. Verba" />
    </template>
    <template slot="description">
      L’Invisible est conçu comme un dialogue entre le Conte et le Parfum, qui
      peut se déployer dans une salle de spectacle ou en une itinérance à
      travers un lieu articulé sur plusieurs espaces. Luca interprète des récits
      issus de traditions orales variées, mais aussi des nouvelles
      contemporaines. Pendant les histoires, des diﬀuseurs émanent subtilement
      les parfums créés spécialement pour chaque conte, rencontrant le public.
      <img
        class="mw-100"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/v1760426337/diffuseur_yx0r7s.png"
        alt="Pendant chaque histoire, un parfum spécialement conçu est diffusé dans la salle"
      />
    </template>
    <template slot="info-age">Tout public à partir de 11 ans</template>
    <template slot="info-duration">Approximativement 1h</template>
    <template slot="info-more">
      <h1>Crédits</h1>
      <dl>
        <dt>Ecrit et conté par</dt>
        <dd>Luca Marchesini (Le Canapé dans l'Arbre)</dd>
        <dt>Parfums créés par</dt>
        <dd>Gaël Montero (Givaudan)</dd>
        <dt>Soutien académique</dt>
        <dd>Patricio Nusshold (UPVM Montpellier 3)</dd>
        <dt>Coaching teatral</dt>
        <dd>Adélaïde Héliot</dd>
        <dt>Charte Graphique</dt>
        <dd>Nicolas Froment (studio cartblanch, Toulouse)</dd>
      </dl>
    </template>
    <template slot="btn-dl-file">
      <b-button
        class="mb-3"
        to="/docs/presentation-invisible.pdf"
        variant="primary"
        target="_blank"
        ><span class="glyphicon glyphicon-file"></span> Télécharger la
        présenation</b-button
      >
      <br />
      <b-button
        to="/docs/dossier-invisible.pdf"
        variant="primary"
        target="_blank"
        ><span class="glyphicon glyphicon-file"></span> Télécharger le
        dossier</b-button
      >
    </template>
  </show>
</template>

<script>
import LogoInvisible from "~/components/LogoInvisible.vue";
import Show from "~/components/Show.vue";
import TeaserVideo from "~/components/TeaserVideo.vue";

export default {
  name: "InvisiblePage",
  components: {
    LogoInvisible,
    Show,
    TeaserVideo,
  },
};
</script>

<style scoped>
.LogoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.LogoCentered {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
