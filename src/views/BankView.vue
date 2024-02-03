<template>
  <div>
    <BankHome/>
    <NavBar class="fixed-navbar" :links="navLinks">
      <template v-slot:nav-button="{ label }">
        <span>{{ label }}</span>
      </template>
    </NavBar>

    <BankAmount :balance="balance">
      <template v-slot:account-amount="{ balance }">
        <input type="text" :value="`${balance} €`" :style="{ color: balance < 0 ? 'red' : 'green' }"
               readonly/>
      </template>
    </BankAmount>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
// import VerticalMenu from '../components/VerticalMenu.vue';
import BankAmount from '../views/BankAmount.vue';
import {mapState} from "vuex";
import BankHome from "@/views/BankHome.vue";

export default {
  name: 'BankView',
  components: {
    BankHome,
    NavBar,
    // VerticalMenu,
    BankAmount
  },
  computed: {
    ...mapState({
      shopUser: state => state.shop.shopUser,
    }),
    navLinks() {
      if (this.shopUser) {
        console.log('je suis connecte');
        console.log(this.shopUser.login);
        return [
          {label: 'Mon compte', to: '/bank/account'},
        ]
      } else {
        return []
      }
    },

  },
  data() {
    return {
      balance: this.$route.params.balance || 0
      // accountAmount: 0
      // menuItems: [
      //   {type: 'title', label: 'Opérations'},
      //   {type: 'button', label: 'Solde', to: '/bank/amount'},
      //   {type: 'button', label: 'Débit/Virement', to: '/bank/operation'},
      //   {type: 'title', label: 'États'},
      //   {type: 'button', label: 'Historique', to: '/bank/history'}
      // ]
    }
  },
  // created() {
  //   this.$store.dispatch('getAccountAmount').then(res => {
  //     this.accountAmount = res;
  //   })
  // }
}
</script>

<style scoped>
</style>