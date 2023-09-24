<template>
  <div>
    <h1>Les virus</h1>
    <p>Le tableau dans le store : {{ viruses }}</p>
    <p>Sous forme de liste avec certains champs</p>


    <span>Filtres :</span><label for="filterpriceactive">par prix</label><input type="checkbox"
                                                                                v-model="filterPriceActive"
                                                                                id="filterpriceactive">
    <hr/>
    <div v-if="filterPriceActive">
      <label for="filterprice">Prix inférieur à :</label>
      <input v-model="priceFilter" id="filterprice" type="number" @keypress="allowNumbersOnly" min="0" step="500">
      <ul>
        <li v-for="(virus, index) in filterVirusesByPrice" :key="index">{{ virus.name }} : {{ virus.price }}</li>
      </ul>
      <hr>
    </div>

    <span>Filtres :</span><label for="filterNameActive">par nom</label><input type="checkbox"
                                                                              v-model="filterNameActive"
                                                                              id="filterNameActive">
    <hr/>
    <div v-if="filterNameActive">
      <label for="filtername">Nom contenant :</label>
      <input v-model="nameFilter" id="filtername" type="text">
      <ul>
        <li v-for="(virus, index) in filterVirusesByName" :key="index">
          {{ virus.name }}
        </li>
      </ul>
      <hr>
    </div>


    <div>
      <label for="filterstock">See viruses that are in stock ?</label>
      <input id="filterstock" type="checkbox" v-model="stockData">
    </div>
    <table v-if="stockData">
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(virus, index) in filterVirusesByStock" :key="index">
        <td>{{ virus.name }}</td>
        <td>{{ virus.price }}</td>
        <td>{{ virus.stock }}</td>
      </tr>
      </tbody>
    </table>
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
    filterPriceActive: false,
    filterNameActive: false,
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
      if (this.stockData) return this.viruses.filter(v => v.stock > 0)
      return this.viruses
    },
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
