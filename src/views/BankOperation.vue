<template>
  <div>
    <slot name="title">
      <h1>Débit | Virement</h1>
    </slot>
    <div class="flex">
      <input type="number" min="0" v-model="amount" placeholder="Montant">
      <div>
        <input type="checkbox" id="dest-checkbox" v-model="showDest">
        <label for="dest-checkbox">Destinataire</label>
        <input v-if="showDest" type="text" v-model="dest" placeholder="Destinataire">
      </div>
      <button @click="validate">Valider</button>
    </div>
    <p v-if="operationNumber">{{ operationMessage }}</p>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}
</style>