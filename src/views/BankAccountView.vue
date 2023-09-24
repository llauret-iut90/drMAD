<template>
  <div >
    <h1 >Account</h1>

    <div >
      <label >Number</label>
      <input v-model="number" >
    </div>

    <button @click="getAccountAmount(number)" >
      Submit
    </button>

    <p v-if="accountAmount" class="mt-4">{{ accountAmount }}</p>

    <button @click="getTransactions(number)"
           >See account transactions
    </button>

    <div v-if="accountTransactions" class="mt-4">
      <ul>
        <li v-for="(transaction, index) in accountTransactions" :key="index" class="mb-2">
          {{ transaction.id }} : {{ transaction.amount }} [{{ getFormattedDate(transaction.date.$date) }}]
        </li>
      </ul>
    </div>
  </div>
</template>


<script>

import {mapState, mapActions} from 'vuex'
import moment from 'moment'

export default {
  name: 'BankAccount',
  data: () => ({
    number: '',
  }),
  computed: {
    ...mapState(['accountAmount', 'accountTransactions']),
  },
  methods: {
    ...mapActions(['getAccountAmount', 'getTransactions']),
    getFormattedDate(date) {
      return moment(date).format('MM/DD/YYYY') + " at " + moment(date).format('HH:mm:ss')
    },
  }
}
</script>
