<template>
  <div>
    <table v-if="itemCheck">
      <thead>
      <tr>
        <th style="width: 1%;">Check</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Details</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <input type="checkbox" :checked="checked.includes(item[fields[0]])" @click="$emit('check-changed', index)">
        <td>{{ item[fields[0]] }}</td>
        <td>{{ item[fields[1]] }}</td>
        <td>{{ item[fields[2]] }}</td>
        <td>
          <button v-if="itemButton" @click="$emit('item-button-clicked', index)">{{ itemButton.text }}</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button v-if="listButton" @click="$emit('list-button-clicked')">{{ listButton.text }}</button>
  </div>
</template>

<script>

export default {
  name: 'CheckedList',
  props: {
    data: Array, // les données sources
    fields: Array, // le tableau contenant le nom des champs
    itemCheck: Boolean, // s'il y a des case à cocher
    checked: Array, // le tableau des cases cochées
    itemButton: Object, // l'objet pour les boutons d'items
    listButton: Object, // l'objet pour le bouton de liste
  },
  data: () => {
    return {}
  }
}
</script>

<style>

</style>