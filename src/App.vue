<template>
  <div id="app">
    <NavBar :titles="titles"></NavBar>
    <router-view/>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},

  data: () => {
    return {
      titles: [
        {title: 'Home', path: '/home'},
        {title: 'Shop', path: '/shop/items'},
        {title: 'Bank Account', path: '/bank/account'},
        {title: 'Login', path: '/shop/login'}
      ]
    }
  },
  methods: {
    ...mapActions(['getAllViruses'])
  },
  mounted() {
    this.getAllViruses()
  }
};
</script>
<style>
</style>