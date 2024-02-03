<template>
  <div>
    <slot name="account-amount" :balance="balance">
      <input type="text" :value="balance" readonly/>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BankAmount',
  props: {balance: Number}
  // data() {
  //   return {
  //     balance: this.$route.params.balance + " €" || 0,
  //   }
  // },
}
</script>