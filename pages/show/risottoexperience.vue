<template>
  <show>
    <template slot="header">
      <div class="HeaderContainer">
        <img
          sizes="100vw"
          class="img-fluid"
          src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/a_hflip/v16702225/header-risottoexperience.png"
        />
        <div class="LogoWrapper">
          <LogoRisotto />
        </div>
      </div>
    </template>
    <template slot="intro-lead">
      “La Risotto Experience” est un spectacle qui unit conte et nourriture.
      Il nait d’une envie d’explorer les liens qui unissent ces deux univers et de construire des nouveaux ponts entre
      les deux. Le Risotto étant un plat qui s’adapte bien aux saisons froides, il se marrie bien avec les histoires,
      les contes merveilleux. De plus, le roi des Risotti est celui aux cèpes, qui poussent en secret dans les bois qui
      abritent les histoires les plus mystérieuses.
    </template>
    <template slot="intro-video">
      <div class="gallery">
        <div
          v-for="(img, idx) in images"
          :key="idx"
          @click="() => showImage(idx)"
        >
          <b-img fluid :src="img" class="Image my-1" />
        </div>
      </div>
    </template>
    <template slot="description">
      La Risotto Experience se passe en trois temps. D'abord un atelier cuisine, dans lequel on va cuisiner un délicieux
      risotto avec les ingrédients qu'on a choisi ensemble. On peut en faire plusieurs marmites en même temps, pas de souci:
      je supervise!
      <br />
      Quand c'est prêt on s'asseoit à table, on accueille (car d'autres personnes peuvent nous rejoindre) et on savoure.
      <br />
      Après mangé, on écoute les histoires que je sortirai de ma besace, que la soirée avec son ambiance et sa chaleur m'aura
      soufflé dans l'oreille. Ça parlera d'ingrédients, d'Italie, de merveilleux et qui sait quoi encore...
      <br /><br />
      <em
        >La Risotto Experience est un spectacle en cours de création. Il a bénéficié du partenariat avec le
        festival Contes et Rencontres en Lozère 2023.</em
      >
    </template>
    <template slot="info-age">Tout public à partir de 10 ans</template>
    <template slot="info-duration">
      <ul>
        <li>Atelier: 1h30 approx.</li>
        <li>Repas: le temps qu'il faut</li>
        <li>Contes: 1h approx.</li>
      </ul>
    </template>
    <template slot="info-more">
      <h1>Crédits</h1>
      <dl>
        <dt>Ecrit et animé par</dt>
        <dd>Luca Marchesini</dd>
      </dl>
    </template>
    <template slot="btn-dl-file">
      <b-button
        class="mb-3"
        to="/docs/dossier-risottoexperience.pdf"
        variant="primary"
        target="_blank"
        >Télécharger le Dossier</b-button
      ><br />
    </template>
    <template slot="wall-of-logos">
      <div class="mb-2">
        <img src="/logo-lozere.png" alt="" height="100" />
      </div>

      <em
        >Ce spectacle a bénéficié d'un partenariat avec Contes et Rencontres en Lozère (organisé par la fédération des Foyers Ruraux de Lozère) en février 2023.</em
      >
    </template>
  </show>
</template>

<script>
import LogoRisotto from '~/components/LogoRisotto.vue'
import Show from '~/components/Show.vue'

export default {
  name: 'RisottoExperience',
  components: {
    LogoRisotto,
    Show,
  },
  computed: {
    images() {
      return [
        'https://res.cloudinary.com/luca-le-conteur/image/upload/v1675077744/risottoexperience/IMG_8813.jpg',
        'https://res.cloudinary.com/luca-le-conteur/image/upload/v1675077929/risottoexperience/IMG_8815.jpg',
        'https://res.cloudinary.com/luca-le-conteur/image/upload/v1675077955/risottoexperience/IMG_8844.jpg'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.HeaderContainer {
  position: relative;
  max-height: 400px;
  overflow-y: clip;
}

.LogoWrapper {
  position: absolute;
  bottom: 1em;
  left: 1em;
  width: 50%;
  max-height: 390px;
  min-width: 256px;
}

.Image {
  border-radius: 10px;
}
</style>
