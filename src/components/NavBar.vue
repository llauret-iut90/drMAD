<template>
  <nav >
    <div >
      <router-link :to="{ name: 'home' }">Home</router-link>
      <ul >
        <li>
          <router-link :to="{ name: 'shopitems' }">
            Shop
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'bankaccount' }">
            Bank Account
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'shoplogin' }">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>