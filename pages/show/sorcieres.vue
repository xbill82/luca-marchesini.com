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
      >La Danse des Sorcières est un spectacle familial qui va titiller l’imaginaire mystérieux autour des êtres surnaturels hostiles: sorcières, ogres, géants méchants ou stupides, lutins malicieux, etc… Les histoires, inspirées des superstitions italiennes, produisent une ambiance inquiétante mais également beaucoup d’humour. Dans ces contes souvent facétieux, la ruse du héros le sauve in-extrémis du danger. Ce spectacle est destiné au jeune public à partir de 5 ans et s’adapte à tous les créneaux d’âge. <br /><br />
      Ce spectacle peut être joué avec ou sans plan de feux. Voici un extrait de
      sa version "tout-terrain".
      <br /><br />

      <teaser-video
        youtube-id="taLPgu72eic"
        video-credits="Marion Chataing"
      ></teaser-video>

      <h2 class="mt-3">Interview à Radio Bartas (48)</h2>
      <p>Lors de la représentation de La Danse des Sorcières à Florac, dans
        le cadre du Festival Contes et Rencontres (organisé par la Fédération
        des Foyers Ruraux de Lozère), j'ai eu le plaisir de répondre aux
        questions de l'envoyée de Radio Bartas (<a target="_blank" href="https://www.radiobartas.net">
        www.radiobartas.net</a>): quelle surprise quand j'ai découvert que je
        n'étais pas le seul à avoir parlé au micro!</p>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1229748856&color=%23ba8650&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-890380521-764004077" title="lucaleconteur" target="_blank" style="color: #cccccc; text-decoration: none;">lucaleconteur</a> · <a href="https://soundcloud.com/user-890380521-764004077/la-danse-des-sorcieres-interview-radio-bartas" title="La Danse Des Sorcières - Interview Radio Bartas" target="_blank" style="color: #cccccc; text-decoration: none;">La Danse Des Sorcières - Interview Radio Bartas</a></div>
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
      <b-button to="/docs/dossier-sorcieres.pdf" variant="primary" target="_blank"
        >Télécharger le Dossier</b-button
      ><br />
      <b-button
        class="mt-1"
        to="/docs/tech-sorcieres.pdf"
        variant="primary"
        target="_blank"
        >Télécharger la fiche technique</b-button
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
    <template slot="pro-space">
      <h1>Espace pro</h1>
      <p>
        Si vous êtes professionnel·le et vous organisez ce spectacle quelque part,
        vous trouverez ci-dessous le matériel dont vous avez besoin pour votre communication.
        <ul>
          <li><a href="/photos-sorcieres.zip">Visuels</a></li>
          <li><a href="/docs/synopsis-sorcieres.pdf">Synopsis et textes de présentation</a></li>
          <li><a href="/docs/affiche-sorcieres.pdf">Modèle d'affiche</a></li>
        </ul>
      </p>

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
