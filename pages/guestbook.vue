<template>
  <div class="Guestbook">
    <header>
      <img
        sizes="100vw"
        class="img-fluid"
        src="https://res.cloudinary.com/luca-le-conteur/image/upload/w_auto:100:1280/v1538139917/header-guestbook.jpg"
      />
    </header>
    <div class="container">
      <section class="claims">
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Merci, Luca, pour le souffle de fraîcheur, pour avoir mis le feu, pour ta spontanéité et ta
              générosité... Continue à nous transporter encore dans tes univers! Au plaisir de t'écouter encore.
              </em
            >
          </h1>
          <h3 class="claim-author">Isabelle Noyer</h3>
          <p class="claim-organization">Festival Contes et Rencontres en Lozère</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >super soirée animée par Luca. Le public composé d'enfants et d'adultes s'est laissé emporter dans l'univers des sorcières. Beaucoup d'interactivité.
Que de plaisir!!! Merci à toi.
              </em
            >
          </h1>
          <h3 class="claim-author">Patricia Richaud</h3>
          <p class="claim-organization">Conseil Municipal, Ville de Piolenc (84)</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Une chaise, des sorcières, lutins et des portes qui grincent
              comme un refrain... et surtout un conteur qui nous embarque dans
              ses histoires, une parenthèse très appréciée des petits comme des
              grands. Bravo et merci, Luca!</em
            >
          </h1>
          <h3 class="claim-author">Véronique Bourdon</h3>
          <p class="claim-organization">Compagnie Durama N'tama</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >J'ai vu un conteur super chouette samedi, il est de Montpellier,
              super feeling avec les mômes, pêchu, belle présence, subtil, tout
              public, super spectacle convenant à toute la famille: Luca
              Marchesini</em
            >
          </h1>
          <h3 class="claim-author">Isabelle Bach</h3>
          <p class="claim-organization">Compagnie Mungo</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Nous sommes vraiment très très contents de l'intervention de
              Luca! Et nous le remercions une fois de plus pour sa bonne humeur
              et son professionnalisme.</em
            >
          </h1>
          <h3 class="claim-author">Nathalie Destre</h3>
          <p class="claim-organization">Association ¡Vamos! - Marvejols</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >La tournée a été très appréciée et je suis sûre qu'elle aura des
              retombées positives pour vous.</em
            >
          </h1>
          <h3 class="claim-author">Hélène Larose</h3>
          <p class="claim-organization">
            Chef de Service - Médiathèque départementale - Hérault
          </p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Luca nous a transportés dans son voyage. Il y a eu beaucoup de
              rires et aussi beaucoup d’interactions! Il a su s’adapter au
              public, à savoir des adultes handicapés mentaux. Il a été très
              disponible afin de bien préparer son intervention et de l’inclure
              au mieux dans notre soirée.</em
            >
          </h1>
          <h3 class="claim-author">Julie Rodriguez</h3>
          <p class="claim-organization">Educatrice - Montpellier</p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Sous une grande église, sur un petit banc, il conte. Il conte les
              sorcières, les humains, les folies, les rêves, les lutins, les
              peurs et les envies. Il conte et nous rions, nous écoutons
              attentivement, avec joie. Et je les vois les sourires des gens, je
              les entends leurs rires, et je sens l'émotion qui est parmi nous,
              grâce à ce moment de partage si beau que nous vivons. Merci Luca
              pour ta générosité et ce beau voyage! Sous une grande église, sur
              un petit banc, un formidable conteur conte.</em
            >
          </h1>
          <h3 class="claim-author">Lou Barriol</h3>
          <p class="claim-organization">
            Chargée de Programmation Artistique - Festival des 4 Saisons -
            Saint-Jean-de-la-Blaquière (34)
          </p>
          <hr />
        </div>
        <div class="claim">
          <h1 class="claim-txt">
            <b-icon-chat-right-quote class="pull-left" />
            <em
              >Très jolie balade de contes de sorcières et d'ogres ponctuées
              d'intonations, bruitages ainsi que d'expressions en langue
              italienne. Prestation interactive vivante, public enchanté sous le
              charme de l'intervenant. Grand Bravo!</em
            >
          </h1>
          <h3 class="claim-author">Latifa Akam</h3>
          <p class="claim-organization">
            Bibliothécaire à la Médiathèque d'Agglomération Aimé Césaire -
            Castelnau-le-lez
          </p>
          <hr />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestBook"
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: relative;
  max-width: 1366px;
  margin: auto;
  box-shadow: 0 0 20px 0 #656565;
  margin-bottom: 40px;
}
.claims {
  font-family: Georgia, serif;
  width: 70%;
  margin: auto;
}
.claim {
  margin-top: 30px;

  .claim-txt {
    font-family: Georgia, serif;
    text-transform: none;
    color: #444;
  }

  .claim-author,
  .claim-organization {
    text-align: right;
    color: $color_darkgrey;
  }
}
</style>
