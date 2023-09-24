<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Les virus</h1>
    <p>Le tableau dans le store : {{ viruses }}</p>
    <p class="mb-2">Sous forme de liste avec certains champs</p>

    <div class="mb-4">
      <label class="block mb-2" for="filterprice">Prix inférieur à :</label>
      <input v-model="priceFilter" id="filterprice" type="number" step="500" min="0"
             class="px-3 py-2 border rounded-md">
    </div>

    <ul class="mb-4">
      <li v-for="(virus, index) in filterVirusesByPrice" :key="index" class="mb-2">
        {{ virus.name }} : {{ virus.price }}
      </li>
    </ul>

    <div class="mb-4">
      <label class="block mb-2" for="filtername">Nom contenant :</label>
      <input v-model="nameFilter" id="filtername" type="text" class="px-3 py-2 border rounded-md">
    </div>

    <ul>
      <li v-for="(virus, index) in filterVirusesByName" :key="index" class="mb-2">
        {{ virus.name }}
      </li>
    </ul>
  </div>
</template>


<script>

import {mapState} from 'vuex'

export default {
  name: 'VirusesView',
  data: () => ({
    priceFilter: 0,
    nameFilter: '',
    stockData: false,
  }),
  computed: {
    ...mapState(['viruses']),
    filterVirusesByPrice() {
      if (this.priceFilter > 0) return this.viruses.filter(v => v.price < this.priceFilter)
      return this.viruses
    },
    filterVirusesByName() {
      if (this.nameFilter) return this.viruses.filter(v => v.name.includes(this.nameFilter))
      return this.viruses
    },
    filterVirusesByStock() {
      if (this.stockData) return this.viruses.filter(v => v.stock.includes(this.stockData))
      return this.viruses
    }
  }
}
</script>
