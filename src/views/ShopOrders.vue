<template>
  <div>
    Orders

    <CheckedList
        :data="orders"
        :fields="['Due', 'status']"
        :itemCheck="false"
        :checked="[]"
        :itemButton="{show: true, text: 'Buy'}"
        :itemCancelButton="{show: true, text: 'Cancel'}"
        :itemAmount="false"
        :list-button="{show: false}"
        :buy-button="{show: false}"
    />
  </div>
</template>

<script>

import CheckedList from "@/components/CheckedList.vue";

export default {
  name: 'ShopOrders',
  components: {
    CheckedList,
  },
  data: () => {
    return {}
  },
  computed: {
    orders() {
      return this.$store.state.shop.shopUser.orders
    }
  },
  methods: {
    itemButtonBuy(item) {
      this.$router.push('/shop/pay/' + item.orderId);
    },
    itemButtonCancel() {
      this.item.status = 'cancelled';
    },
    listButtonClicked() {
      this.$emit('list-button-clicked')
    },
    handleCheckChanged(checked) {
      this.$emit('check-toggled', checked)
    },
    handleAmountChanged(amount) {
      this.$emit('amount-changed', amount)
    },
    resetCheckboxes() {
      this.$emit('reset-checks')
    }
  }
}
</script>

<style>

</style>