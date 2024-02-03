<template>
  <div>
    <NavBar class="fixed-navbar" :links="navLinks">
      <template v-slot:nav-button="{ label }">
        <span>{{ label }}</span>
      </template>
    </NavBar>

    <BankAmount :balance="accountBalance">
      <template v-slot:account-amount="{ balance }">
        <input type="text" :value="`${balance} €`" :style="{ color: balance < 0 ? 'red' : 'green' }" readonly/>
      </template>
    </BankAmount>
    <router-view name="bankmain"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
// import VerticalMenu from '../components/VerticalMenu.vue';
import BankAmount from '../views/BankAmount.vue';

export default {
  name: 'BankView',
  components: {
    NavBar,
    // VerticalMenu,
    BankAmount
  },
  computed: {
    navLinks() {
      if (Object.keys(this.shopUser).length > 0) {
        console.log('je suis connecte');
        console.log(this.shopUser.login);
        return [
          {label: 'Mon compte', to: '/bank/account'},
        ]
      } else {
        return []
      }
    }
  },
  data() {
    return {
      accountBalance: 0,
      // menuItems: [
      //   {type: 'title', label: 'Opérations'},
      //   {type: 'button', label: 'Solde', to: '/bank/amount'},
      //   {type: 'button', label: 'Débit/Virement', to: '/bank/operation'},
      //   {type: 'title', label: 'États'},
      //   {type: 'button', label: 'Historique', to: '/bank/history'}
      // ]
    }
  },
  created() {
    this.$store.dispatch('getAccountAmount').then(res => {
      this.accountBalance = res;
    })
  }
}
</script>

<style scoped>
</style>