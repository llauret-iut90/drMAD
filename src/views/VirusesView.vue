<template>
  <div>
    <h1>Les virus</h1>
    <p>Le tableau dans le store : {{ viruses }}</p>
    <p>Sous forme de liste avec certains champs</p>
    <hr>
    <div>
      <span>Filtres :</span><label for="filterpriceactive">par prix</label><input type="checkbox"
                                                                                  v-model="filterPriceActive"
                                                                                  id="filterpriceactive">

      <span>Filtres :</span><label for="filterNameActive">par nom</label><input type="checkbox"
                                                                                v-model="filterNameActive"
                                                                                id="filterNameActive">
      <span>
        <label for="filterstock">See viruses that are in stock ?</label>
        <input id="filterstock" type="checkbox" v-model="stockData">
      </span>
    </div>
    <div>
      <div v-if="filterPriceActive">
        <label for="filterprice">Prix inférieur à :</label>
        <input v-model="priceFilter" id="filterprice" type="number" @keypress="allowNumbersOnly" min="0" step="500">
      </div>
      <div v-if="filterNameActive">
        <label for="filtername">Nom contenant :</label>
        <input v-model="nameFilter" id="filtername" type="text">
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(virus, index) in (filters)"
            :key="index">
          <td>{{ virus.name }}</td>
          <td>{{ virus.price }}</td>
          <td>{{ virus.stock }}</td>
        </tr>
        </tbody>
      </table>
    </div>
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
      if (this.priceFilter > 0) return this.viruses.filter(v => v.price <= this.priceFilter)
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
    filters() {
      let filteredViruses = this.viruses;
      if (this.filterPriceActive) {filteredViruses = filteredViruses.filter(v => v.price <= this.priceFilter);}
      if (this.filterNameActive) {filteredViruses = filteredViruses.filter(v => v.name.includes(this.nameFilter));}
      if (this.stockData) {filteredViruses = filteredViruses.filter(v => v.stock > 0);}
      return filteredViruses;
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
<style scoped>
/* Style pour imiter un terminal Linux */

body {
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  padding: 20px;
}

h1 {
  color: #00ff00;
  font-size: 24px;
}

p {
  margin: 10px 0;
  color: #00ff00;
}

hr {
  border: 0;
  border-top: 1px solid #00ff00;
}

label {
  color: #00ff00;
}


input[type="checkbox"] {
  transform: scale(1.2);
  margin-right: 10px;
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #000;
  border: 2px solid #00ff00;
  border-radius: 3px;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #00ff00;
  border: 2px solid #00ff00;
}

input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 3px rgba(0, 255, 0, 0.7);
}


input[type="text"] {
  background-color: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 5px;
  margin: 5px 0;
  border-radius: 3px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

input[type="number"] {
  background-color: #000;
  color: #00ff00;
  font-size: 16px;
  padding: 5px;
  border: 2px solid #00ff00;
  border-radius: 3px;
  width: 100px;
  height: 30px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  background-color: #000;
  color: #00ff00;
  font-size: 12px;
  width: 20px;
  height: 30px;
  border: 2px solid #00ff00;
  border-radius: 3px;
  cursor: pointer;
}

input[type="number"]::-webkit-outer-spin-button:hover,
input[type="number"]::-webkit-inner-spin-button:hover {
  background-color: #00ff00;
  border: 2px solid #00ff00;
  color: #000;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #00ff00;
  padding: 8px;
  text-align: left;
  color: #00ff00;
}

th {
  background-color: #00ff00;
  color: #000;
}

tr:nth-child(even) {
  background-color: #111;
}

span {
  color: #00ff00;
}

</style>
