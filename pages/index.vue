<template>
  <div>
    <navbar></navbar>
    <header class="Header">
      <b-img src="~/assets/header-home-bg.jpg" fluid-grow ></b-img>
      <div class="Header-jumbofon">
        <b-row>
          <b-col
            lg="6"
            md="7"
            sm="8"
            xs="12">
            <h1>Messieurs dames, souriez!</h1>
            <b-img src="~/assets/logo-header.png" fluid></b-img>
            <h1>va vous raconter une histoire!</h1>
          </b-col>
        </b-row>

      </div>
    </header>
    <div class="container">
      <section class="Teaser">
        <b-row>
          <b-col md="4" xs="12">
            <p class="Teaser-lead">Luca Marchesini est un conteur franco-italo-hispano-phone installé à Montpellier depuis 2009. Sa parole est inventive, voyageuse et riche en vitamines. Ça vous intrigue? Voici un petit extrait!</p>
          </b-col>
          <b-col
            md="7"
            offset-md="1"
            xs="12">
            <div class="embed-container">
              <iframe src="http://www.youtube.com/embed/taLPgu72eic" allowfullscreen="" frameborder="0"></iframe>
            </div>
            <div class="Teaser-videoCredits">Crédits Vidéo © Marion Chataing</div>

            <div class="Claim">
              <div class="Claim-txt">
                  "Nous sommes vraiment très très contents de l'intervention de Luca! Et nous le remercions une fois de plus pour sa bonne humeur et son professionnalisme."
              </div>
              <p class="Claim-author">Nathalie Destre</p>
              <p class="Claim-organization">Association ¡Vamos! - Marvejols</p>
            </div>
          </b-col>
        </b-row>



			<!-- <div class="col-md-7 col-md-offset-1 col-xs-12 text-center">

				<div><div class="claim"><h1 class="claim-txt"><em>"Sous une grande église, sur un petit banc, il conte.
Il conte les sorcières, les humains, les folies, les rêves, les lutins, les peurs et les envies.
Il conte et nous rions, nous écoutons attentivement, avec joie. Et je les vois les sourires des gens, je les entends leurs rires, et je sens l'émotion qui est parmi nous, grâce à ce moment de partage si beau que nous vivons.
Merci Luca pour ta générosité et ce beau voyage!
Sous une grande église, sur un petit banc, un formidable conteur conte."</em></h1>
<p class="claim-author">Lou Barriol</p>
<p class="claim-organization">Chargée de Programmation Artistique - Festival des 4 Saisons - Saint-Jean-de-la-Blaquière (34)</p></div></div></div>
			</div>
		</div> -->
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.Header {
  box-shadow: 0 0 20px 0 #656565;
  position: relative;
  overflow: hidden;
}

.Header-jumbofon {
  position: absolute;
  bottom: 0;
  padding-top: 30px;
  width: 100%;

  h1 {
    margin: 0 0 0 4%;
    color: $color_white;
    font-size: 2.2em;
  }
}
.container {
  max-width: 960px;
}

.Teaser-lead {
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.4;
}

.Teaser-videoCredits {
  text-align: right;
  font-size: 0.7em;
  color: $color_grey;
}

.Claim {
  font-family: Georgia, serif;
  margin: 3.5em;
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

