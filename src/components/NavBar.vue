<template>
  <!--  <nav>-->
  <!--    <div class="nav-links">-->
  <!--      <router-link :to="{ name: 'home' }">Home</router-link>-->
  <!--      <router-link :to="{ name: 'shopitems' }">Shop</router-link>-->
  <!--      <router-link :to="{ name: 'bankaccount' }">Bank Account</router-link>-->
  <!--      <router-link :to="{ name: 'shoplogin' }">Login</router-link>-->
  <!--    </div>-->
  <!--  </nav>-->
  <nav>
    <div class="nav-links">
      <router-link v-for="(title, index) in titles"
                   :key="index"
                   :to="title.path">
        {{ title.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {titles: Array}
}
</script>

<style scoped>
nav .nav-links {
  display: flex;
  align-items: center;
}

nav div a {
  color: #00ff00;
  text-decoration: none;
  padding: 5px 10px;
  background-color: #000;
  border: 1px solid #00ff00;
  border-radius: 3px;
  margin-right: 10px;
  font-family: monospace;
}

nav div a:hover {
  background-color: #007f00;
}
</style>
