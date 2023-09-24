<template>
  <div>
    <h1>Les virus</h1>
    <p>Le tableau dans le store : {{ viruses }}</p>
    <p>Sous forme de liste avec certains champs</p>

    <div>
      <label for="filterprice">Prix inférieur à :</label>
      <input v-model="priceFilter" id="filterprice" type="number" @keypress="allowNumbersOnly" min="0" step="500">
    </div>

    <ul>
      <li v-for="(virus, index) in filterVirusesByPrice" :key="index">{{ virus.name }} : {{ virus.price }}</li>
    </ul>

    <div>
      <label for="filtername">Nom contenant :</label>
      <input v-model="nameFilter" id="filtername" type="text">
    </div>

    <ul>
      <li v-for="(virus, index) in filterVirusesByName" :key="index">
        {{ virus.name }}
      </li>
    </ul>
  </div>
</template>


<script>

import {mapState} from 'vuex'
import * as events from "events";

export default {
  name: 'VirusesView',
  data: () => ({
    priceFilter: 0,
    nameFilter: '',
    stockData: false,
  }),
  computed: {
    events() {
      return events
    },
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
  },
  methods: {
    allowNumbersOnly(event) {
      if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 8) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    },
  },
}
</script>
