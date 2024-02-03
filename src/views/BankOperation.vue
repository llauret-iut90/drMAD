<template>
  <div>
    <slot name="title">
      <h1>Débit | Virement</h1>
    </slot>
    <input type="number" v-model="amount" placeholder="Montant">
    <div>
      <input type="checkbox" id="dest-checkbox" v-model="showDest">
      <label for="dest-checkbox">Destinataire</label>
      <input v-if="showDest" type="text" v-model="dest" placeholder="Destinataire">
    </div>
    <button @click="validate">Valider</button>
    <p v-if="operationNumber">{{ operationMessage }}</p>
  </div>
</template>

<script>
import {computed, ref} from 'vue';

export default {
  setup() {
    const amount = ref('');
    const showDest = ref(false);
    const dest = ref('');
    const operationNumber = ref(null);

    const validate = async () => {
      // Validate the operation here and call your service
      // If the operation is valid, update operationNumber with the returned operation number
      // If the operation is not valid, display an error dialog
    };

    const operationMessage = computed(() => {
      return operationNumber.value ? `L'opération est validée avec le n° : ${operationNumber.value}. Vous pouvez la retrouver dans l'historique` : '';
    });

    return {amount, showDest, dest, validate, operationNumber, operationMessage};
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>