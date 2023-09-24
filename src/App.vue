<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
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
