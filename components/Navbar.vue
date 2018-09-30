<template>
  <b-navbar fixed="top" toggleable="md" type="light" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand class="ml-5" href="/">
      <img src="/logo-nav.png" alt="Luca Marchesini">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/agenda">Agenda</b-nav-item>
        <b-nav-item href="/#shows">Spectacles</b-nav-item>
        <b-nav-item href="/guestbook">Livre d'Or</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
