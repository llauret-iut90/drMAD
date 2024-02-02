<template>
  <div>
    <input type="text" v-model="orderId" placeholder="Enter order id">
    <button @click="payOrder">Payer</button>
  </div>
</template>

<script>

export default {
  name: 'ShopPay',
  // [Vue warn]: Computed property "orderId" was assigned to but it has no setter
  // je dois utiliser data au lieu de computed sinon rip
  data() {
    return {
      orderId: this.$route.params.orderId || '',
      orderIndex: this.$route.params.orderIndex || null,
      orders: this.$store.state.shop.shopUser.orders
    };
  },
  methods: {
    payOrder() {
      console.log('je paye la commande');
      this.orders[this.orderIndex].status = 'finalized';
      this.orderId = '';
    }
  }
}
</script>

<style scoped>
</style>