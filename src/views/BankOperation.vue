<template>
  <div>
    <h1>
      <slot name="title">Débit / Virement</slot>
    </h1>
    <input type="number" min="1" v-model="amount" placeholder="Montant" @change="test">
    <div>
      <input type="checkbox" id="checkbox" v-model="isRecipientChecked">
      <label for="checkbox">Destinataire</label>
      <input type="text" v-if="isRecipientChecked" v-model="recipient" placeholder="Destinataire">
    </div>
    <button @click="validateOperation">Valider</button>
    <p v-if="operationMessage">{{ operationMessage }}</p>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";


export default {
  data() {
    return {
      amount: null,
      isRecipientChecked: false,
      recipient: "",
      operationMessage: ""
    };
  },
  computed: {
    ...mapState({
      account: state => state.bank.accountNumber._id
    })
  },
  methods: {
    ...mapActions(["createPayment"]),
    validateOperation() {
      console.log("validateOperation");
      console.log(this.account);
      console.log(this.amount);
      console.log(this.recipient);
      this.createPayment({
        id_account: this.account,
        amount: this.amount,
        destination: this.recipient,
      }).then(() => {
        this.operationMessage = "Opération validée";
      })
    },
    test() {
      // @change dans le input
      console.log("test");
      console.log(this.account);
      console.log(this.amount);
      console.log(this.recipient);
    }
  }
};
</script>

<style scoped>
/* Votre style ici */
</style>