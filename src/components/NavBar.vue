<template>
  <nav>
    <div class="nav-links">
      <router-link v-for="(title, index) in filteredTitles"
                   :key="index"
                   :to="title.path"
                   @click.native="title.title === 'Logout' ? logout() : null"
      >
        {{ title.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'NavBar',
  props: {titles: Array},
  computed: {
    shopUser() {
      return this.$store.state.shop.shopUser
    },
    ...mapActions(['shopLogin']),
    filteredTitles() {
      if (!this.shopLogin) {
        return this.titles.filter(title => title.title === 'Login');
      } else {
        return this.titles.map(title => {
          if (title.title === 'Login') {
            return {...title, title: 'Logout'};
          }
          return title;
        });
      }
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      console.log(this.$store.state.shop.shopUser);
      if (this.$route.path !== '/shop/login') {
        await this.$router.push('/shop/login');
        console.log(this.$route.path);
      }
    }
  }
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
