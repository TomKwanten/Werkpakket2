<template>
  <div class="login-container">
    <h2 class="titel">Inloggen</h2>

    <div class="logout">
      <p v-if="loggedInUser" class="welkom">Welkom terug, {{ loggedInUser }}!</p>
      <button v-if="loggedInUser" @click="logout" class="login-button">Uitloggen</button>
    </div>

    <form v-if="!loggedInUser" @submit.prevent="login" class="login-form">
      <label for="username">Naam:</label>
      <input type="text" id="username" v-model="loginData.username" required>

      <label for="password">Wachtwoord:</label>
      <input type="password" id="password" v-model="loginData.password" required>

      <label>
        <input type="checkbox" v-model="rememberMe"> Onthoud mij
      </label>

      <button class="login-button" type="submit">Inloggen</button>
    </form>
    <p v-if="loginError && !loggedInUser" class="error-message">Gebruikersnaam of wachtwoord is fout. Probeer opnieuw.</p>
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
    this.loggedInUser = localStorage.getItem('loggedInUser');
  },
  methods: {
    login() {
      const user = this.users.find(u => u.username === this.loginData.username && u.password === this.loginData.password);
      if (user) {
        this.loginError = false;
        if (this.rememberMe) {
          localStorage.setItem('loggedInUser', this.loginData.username);
        }
        this.$router.push('/winkelmand');
      } else {

        this.loginError = true;
      }
    },
    logout() {
      localStorage.removeItem('loggedInUser');
      this.loggedInUser = null;
      window.location.reload();
    },
  },
};
</script>

<style scoped>
/* Stijlen voor de inlogpagina */
.welkom{
  text-align: center;
}
.logout{
  margin: auto;
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 10px;
  text-align: center;
}
.titel {
  text-align: center;
}
.login-button {
  border: 2px solid  #cd1d66;
  border-radius: 5px;
  background-color: #d6226d;
  padding: 5px 20px 5px 20px;
}
.login-container {
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: grid;
  gap: 10px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 60px;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
