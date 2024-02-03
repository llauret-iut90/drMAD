<template>
  <div>
    <slot name="title">
      <h1>Opérations passées</h1>
    </slot>
<!--    <div>-->
<!--      <input type="checkbox" v-model="filterByPeriod">-->
<!--      <label>Filtrer par période</label>-->
<!--      <div v-if="filterByPeriod">-->
<!--        <input type="date" v-model="fromDate" @input="filterTransactions">-->
<!--        <label>Du</label>-->
<!--        <input type="date" v-model="toDate" @input="filterTransactions">-->
<!--        <label>Au</label>-->
<!--      </div>-->
<!--    </div>-->
<!--    <DataTable :headers="headers" :items="filteredTransactions" :itemCheck="true" :itemButton="true"-->
<!--               @itemClicked="showTransaction"/>-->
<!--    <button @click="showCheckedTransactions">Voir</button>-->
  </div>
</template>

<script>
// import {ref, computed} from 'vue';
// import DataTable from '../components/DataTable.vue';

export default {
  // components: {
  //   DataTable
  // },
  // setup() {
  //   const filterByPeriod = ref(false);
  //   const fromDate = ref('');
  //   const toDate = ref('');
  //   const headers = [
  //     {label: 'Montant', name: 'amount'},
  //     {label: 'Date', name: 'date'},
  //     {label: 'Lettre', name: 'letter'},
  //   ];
  //
  //   const filterTransactions = () => {
  //   };
  //
  //   const showTransaction = (index) => {
  //   };
  //
  //   const showCheckedTransactions = () => {
  //   };
  //
  //   const filteredTransactions = computed(() => {
  //   });
  //
  //   return {
  //     filterByPeriod,
  //     fromDate,
  //     toDate,
  //     headers,
  //     filterTransactions,
  //     showTransaction,
  //     showCheckedTransactions,
  //     filteredTransactions
  //   };
  // }
}
</script>

<style scoped>
</style>