<template>
  <div class="invisible-container">
    <header class="header">
      <img src="/logo-invisible.png" alt="L'Invisible" class="logo" />
    </header>

    <main class="content">
      <h1>L'Invisible - Spectacle de contes parfumés</h1>

      <div class="description">
        <p>
          Nous avons le plaisir de vous inviter à découvrir "L'Invisible", un
          spectacle unique de contes parfumés. Deux dates sont disponibles pour
          cette expérience sensorielle.
        </p>
        <ul>
          <li>Durée: 1h</li>
          <li>Public à partir de 11 ans</li>
          <li>Prix : gratuit - Réservation obligatoire</li>
          <li>
            <a
              href="https://www.google.com/maps/place/Atrium+Library/@43.6307815,3.8670897,16z/data=!3m1!4b1!4m6!3m5!1s0x12b6af217be1ff51:0x7b8bbbb1864d3c4d!8m2!3d43.6307815!4d3.8696646!16s%2Fg%2F1ptzbh1tm?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              >L'ATRIUM sur Google Maps</a
            >
          </li>
        </ul>
      </div>

      <div class="dates">
        <div class="date-card">
          <h2>24 Mars 2025, 19h30 - Répétition générale</h2>
          <p>Bibliothèque Universitaire ATRIUM, route de Mende, Montpellier</p>
          <a
            href="https://yp.events/f10c74f9-da20-481b-9d16-f678b04fb296/LInvisible----spectacle-de-contes-parfumes"
            class="booking-button"
            target="_blank"
          >
            Réserver
          </a>
        </div>

        <div class="date-card">
          <h2>27 Mars 2025, 19h30</h2>
          <p>Bibliothèque Universitaire ATRIUM, route de Mende, Montpellier</p>
          <a
            href="https://yp.events/e3b5a994-d249-4811-bc9d-b019af486ad2/LInvisible----spectacle-de-contes-parfumes"
            class="booking-button"
            target="_blank"
          >
            Réserver
          </a>
        </div>

        <div class="date-card">
          <h2>28 Mars 2025, 19h30</h2>
          <p>Bibliothèque Universitaire ATRIUM, route de Mende, Montpellier</p>
          <a
            href="https://yp.events/23bcc209-5192-43dd-80cf-21a8f438b0c0/LInvisible----spectacle-de-contes-parfumes"
            class="booking-button"
            target="_blank"
          >
            Réserver
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "InvisibleAtrium",
};
</script>

<style scoped>
.invisible-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Arial", sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.logo {
  max-width: 300px;
  height: auto;
}

.content {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.description {
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
}

.description ul {
  list-style-type: none;
  padding-left: 0;
}

.dates {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.date-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.date-card:hover {
  transform: translateY(-5px);
}

h2 {
  margin-bottom: 1.5rem;
}

.booking-button {
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.booking-button:hover {
  background-color: #555;
}
</style>
