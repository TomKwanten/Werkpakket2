<template>
    <div>
      <h2>Inloggen</h2>
      <p v-if="loggedInUser">Welkom terug, {{ loggedInUser }}! <button @click="logout">Uitloggen</button></p>
      <!-- Toon inlogvelden als er geen ingelogde gebruiker is -->
      <form v-if="!loggedInUser" @submit.prevent="login">
        <label for="username">Gebruikersnaam:</label>
        <input type="text" id="username" v-model="loginData.username" required>
  
        <label for="password">Wachtwoord:</label>
        <input type="password" id="password" v-model="loginData.password" required>
  
        <label>
          <input type="checkbox" v-model="rememberMe"> Onthoud mij
        </label>
  
        <button type="submit">Inloggen</button>
      </form>
      <p v-if="loginError && !loggedInUser" style="color: red;">Foutieve gebruikersnaam of wachtwoord. Probeer opnieuw.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loginData: {
          username: '',
          password: '',
        },
        loginError: false,
        rememberMe: false,
        loggedInUser: null,
        users: [
          { username: 'gebruiker1', password: 'wachtwoord1' },
          { username: 'gebruiker2', password: 'wachtwoord2' },
        ],
      };
    },
    created() {
      // Controleer of de gebruiker is ingelogd op basis van localStorage
      this.loggedInUser = localStorage.getItem('loggedInUser');
    },
    methods: {
      login() {
        // Simuleer inlogfunctionaliteit
        const user = this.users.find(u => u.username === this.loginData.username && u.password === this.loginData.password);
  
        if (user) {
          // Reset eventuele foutmelding
          this.loginError = false;
  
          // Onthoud de inlogstatus als de gebruiker dit wil
          if (this.rememberMe) {
            localStorage.setItem('loggedInUser', this.loginData.username);
          }
  
          // Navigeer naar het winkelmandje (pas de route aan naar de daadwerkelijke winkelmandroute)
          this.$router.push('/winkelmand');
        } else {
          // Geef een foutmelding weer als de inloggegevens niet overeenkomen
          this.loginError = true;
        }
      },
      logout() {
        // Verwijder de inlogstatus en herlaad de pagina
        localStorage.removeItem('loggedInUser');
        this.loggedInUser = null;
        // Herlaad de pagina om terug naar de lege inlogvelden te gaan
        window.location.reload();
      },
    },
  };
  </script>
  
  <style>
  /* Stijlen voor de inlogpagina */
  </style>
  