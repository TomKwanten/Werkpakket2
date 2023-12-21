<template>
    <div>
      <h2>Inloggen</h2>
      <form @submit.prevent="login">
        <label for="username">Gebruikersnaam:</label>
        <input type="text" id="username" v-model="loginData.username" required>
  
        <label for="password">Wachtwoord:</label>
        <input type="password" id="password" v-model="loginData.password" required>
  
        <button type="submit">Inloggen</button>
      </form>
      <p v-if="loginError" style="color: red;">Foutieve gebruikersnaam of wachtwoord. Probeer opnieuw.</p>
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
        users: [
          { username: 'gebruiker1', password: 'wachtwoord1' },
          { username: 'gebruiker2', password: 'wachtwoord2' },
        ],
      };
    },
    methods: {
      login() {
        // Simuleer inlogfunctionaliteit
        const user = this.users.find(u => u.username === this.loginData.username && u.password === this.loginData.password);
  
        if (user) {
          // Reset eventuele foutmelding
          this.loginError = false;
          // Navigeer naar het winkelmandje (pas de route aan naar de daadwerkelijke winkelmandroute)
          this.$router.push('/winkelmand');
        } else {
          // Geef een foutmelding weer als de inloggegevens niet overeenkomen
          this.loginError = true;
        }
      },
    },
  };
  </script>
  
  <style>
  /* Stijlen voor de inlogpagina */
  </style>
  