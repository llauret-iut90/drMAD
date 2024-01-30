<template>
  <div>
    <input type="text" v-model="orderId" placeholder="Enter order id">
    <button @click="payOrder">Payer</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'ShopPay',
  props: {
    id: String
  },
  data() {
    return {
      orderId: this.id || ''
    }
  },
  methods: {
    ...mapActions(['finalizeOrder']),
    async payOrder() {
      try {
        await this.finalizeOrder(this.orderId);
      } catch (error) {
        alert('Erreur : ' + error.message);
      }
    }
  }
}
</script>

<style scoped>
</style>