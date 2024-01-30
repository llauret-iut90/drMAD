<template>
  <div id="app">
    <NavBar :titles="titles"></NavBar>
    <router-view/>
    <div style="color: aliceblue">
      <p v-if="shopUser"> Welcome : {{ shopUser.login }}</p>
      <p v-else> Log or get out</p>
    </div>
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
        {title: 'Shop', path: '/shop/buy'},
        {title: 'Pay', path: '/shop/pay'},
        {title: 'Orders', path: '/shop/orders'},
        {title: 'Bank Account', path: '/bank/account'},
        {title: 'Login', path: '/shop/login'}
      ]
    }
  },
  computed: {
    shopUser() {
      return this.$store.state.shop.shopUser
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