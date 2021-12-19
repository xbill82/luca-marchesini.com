<template>
  <show>
    <template slot="header">
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1624227385/header-otello.png"
      />
    </template>
    <template slot="intro-lead">
      <strong
        >« Moi, je suis petit. Mais j'arrive là où arrivent les grands »</strong
      ><br />
      Otello est tout petit, mais il veut arriver là où arrivent les grands. Il
      veut croquer le monde avec sa passion pour l’opéra et les bals de village,
      mais la guerre arrive pour balayer tous ses rêves. Puis, c’est la
      reconstruction et, dans le boom économique de l’Italie d’après-guerre, le
      cinéma Teatro Verdi ouvre ses portes pour éblouir les yeux des gens du
      village. Le monde entier se montre sur le grand écran, dans ce petit coin
      perdu d’Italie. Ça y est: la vie d’Otello est comme un film.
    </template>
    <template slot="intro-video">
      <!-- <teaser-video
        youtube-id="YWcMT4do2v8"
        video-credits="Désirée Snackey"
      ></teaser-video> -->
    </template>
    <template slot="description">
      Otello, c’est mon grand-père et dans ce spectacle je raconte sa vie. Qui,
      comme la vie de beaucoup de grand-pères, est épique. L’entreprise d’Otello
      pour ouvrir un cinéma (au lieu de devenir menuisier comme ses frères) est
      le fil conducteur d’un plus grand récit: celui de l’Italie d’avant et
      après la Deuxième Guerre Mondiale, avec ses espoirs et contradictions. Les
      extraits des films qui ont marqué la vie du Teatro Verdi s’invitent dans
      cette narration, créant une surprenante alliance de styles.
      <br /><br />
      <em
        >Otello est un spectacle en cours de création. Il bénéficie d'une
        résidence de création au théâtre Gérard Philippe de Montpellier en mai
        2022.</em
      >
    </template>
    <template slot="info-age">Public adulte à partir de 13 ans</template>
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
        to="/docs/dossier-otello.pdf"
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
        >Ce spectacle bénéficiera d'une résidence de création au Théâtre Gérard
        Philippe (Montpellier) en mai 2022.</em
      >
    </template>
  </show>
</template>

<script>
import Show from "~/components/Show.vue";

export default {
  name: "LartderaterletrainPage",
  components: { Show },
};
</script>

<style>
</style>
