<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Account</h1>

    <div class="mb-4">
      <label class="block mb-2">Number</label>
      <input v-model="number" class="px-3 py-2 border rounded-md">
    </div>

    <button @click="getAccountAmount(number)" class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
      Submit
    </button>

    <p v-if="accountAmount" class="mt-4">{{ accountAmount }}</p>

    <button @click="getTransactions(number)"
            class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mt-4">See account transactions
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
