<template>
  <div class="vertical-menu">
    <div v-for="(item, index) in items" :key="index">
      <template v-if="item.type === 'title'">
        <slot name="menu-title" :label="item.label">{{ item.label }}</slot>
      </template>
      <span v-else-if="item.type === 'link'" @click="goTo(item.to)">
        <slot name="menu-link" :label="item.label">
          <button>{{ item.label }}</button>
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalMenu',
  props: {items: Array},
  methods: {
    goTo(dest) {
      this.$router.push(dest);
    }
  }
}
</script>

<style scoped>
.vertical-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vertical-menu div {
  margin-bottom: 10px;
}

.vertical-menu button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>