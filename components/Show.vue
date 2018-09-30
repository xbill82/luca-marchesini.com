<template>
  <div class="Show">
    <header>
      <slot name="header"></slot>
    </header>
    <div class="container">
      <b-row>
        <b-col
          md="10"
          offset-md="1"
          xs="12">
          <section class="Intro">
            <p class="Intro-lead">
              <slot name="intro-lead"></slot>
            </p>
            <slot name="intro-video"></slot>
          </section>
        </b-col>
      </b-row>
      <hr>
      <section class="Description">
        <h1>Description</h1>
        <p>
          <slot name="description"></slot>
        </p>
      </section>
      <hr>
      <section class="Info">
        <b-row>
          <b-col>
            <h1>Informations</h1>
            <dl>
              <dt>Tranche d'âge:</dt>
              <dd><slot name="info-age"></slot></dd>
              <dt>Durée:</dt>
              <dd><slot name="info-duration"></slot></dd>
            </dl>
            <slot name="btn-dl-file"></slot>
            &nbsp;
            <b-btn to="/contact" variant="info">Contact</b-btn>
          </b-col>
          <b-col>
            <div class="Claim">
              <div class="Claim-txt"><em><slot name="claim-txt"></slot></em>
              </div>
              <p class="Claim-author"><slot name="claim-author"></slot></p>
              <p class="Claim-organization"><slot name="claim-organization"></slot></p>
            </div>
          </b-col>
        </b-row>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show"
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
