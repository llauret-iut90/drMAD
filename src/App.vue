<template>
  <div id="app">
    <NavBar :links="links">
      <template v-slot:nav-button="{ label }">
        <span v-if="label === 'Boutique'"><strong>{{ label }}</strong></span>
        <img v-else-if="label === 'Compte bancaire'" src="@/assets/bank-icon.jpg" alt="Bank" style="width: 20px">
      </template>
    </NavBar>
    <router-view/>
    <div style="color: aliceblue">
      <p v-if="shopUser"> {{ shopUser.login }}</p>
      <p v-else> Log or get out</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},
  computed: {
    ...mapState({
      shopUser: state => state.shop.shopUser,
    }),
    links() {
      if (this.shopUser) {
        return [
          {label: 'Boutique', to: '/shop'},
          {label: 'Compte bancaire', to: '/bank'},
        ]
      } else {
        return [
          {label: 'Boutique', to: '/shop'},
          {label: 'Compte bancaire', to: '/bank'},
          {label: 'Login', to: '/shop/login'}
        ]
      }
    }
  },
  methods: {
    ...mapActions(['getAllViruses']),
  },
  mounted() {
    this.getAllViruses()
  }
};
</script>
<style>
</style>