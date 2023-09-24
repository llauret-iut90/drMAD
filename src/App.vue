<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <v-img src="@/src/assets/drMAD.png" alt="Virus" ></v-img>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['getAllViruses'])
  },
  mounted() {
    this.getAllViruses()
  }
};
</script>
