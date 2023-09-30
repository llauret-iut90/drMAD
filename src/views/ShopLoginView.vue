<template>
  <div>
    <h1>Login</h1>

    <span>login</span><input v-model="login">
    <span>password</span><input v-model="password">
    <button @click="shopLogin({login, password})">Login</button>
    <p v-if="shopUser">{{shopUser}}</p>
  </div>

</template>

<script>

import {mapState, mapActions} from 'vuex'
export default {
  name: 'ShopLoginView',
  data: () => ({
    login: '',
    password:'',
  }),
  computed: {
    ...mapState(['shopUser'])
  },
  methods: {
    ...mapActions(['shopLogin']),
  }
}
</script>
<style scoped>
/* Styles pour imiter un terminal Linux */

body {
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background-color: #111;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 255, 0, 0.5);
  text-align: center;
}

h1 {
  color: #00ff00;
  font-size: 24px;
}

span {
  display: block;
  margin-top: 10px;
  color: #00ff00;
}

input {
  background-color: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 5px;
  margin: 5px 0;
  border-radius: 3px;
}

button {
  background-color: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 5px;
  margin: 5px 0;
  border-radius: 3px;
}

button:hover {
  background-color: #007f00;
}

p {
  color: #00ff00;
  margin-top: 10px;
}

/* Ajoutez ici d'autres styles spécifiques au besoin */

</style>