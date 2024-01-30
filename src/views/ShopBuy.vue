<template>
  <div class="shop-buy">
    <ItemsList class="shop-buy__items"/>
    <BasketList class="shop-buy__basket"/>
  </div>
</template>

<script setup>
import ItemsList from '@/components/ItemsList.vue'
import BasketList from '@/components/BasketList.vue'
</script>

<style scoped>
.shop-buy {
  display: flex;
  justify-content: space-between;
}

.shop-buy__items {
  width: 100%;
}

.shop-buy__basket {
  width: 50%;
}
</style>