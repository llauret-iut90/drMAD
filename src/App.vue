<template>
  <div class="app">
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
<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 98.3vh;
  font-family: 'Inconsolata', monospace;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.10);
  background-image: url("@/assets/black_man_laughing_in_the_dark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: #00ff00;
}
</style>