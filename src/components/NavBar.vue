<template>
  <nav class="bg-purple-600 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link class="text-white text-2xl font-bold hover:text-green-300 " :to="{ name: 'home' }">Home</router-link>
      <ul class="flex space-x-4">
        <li>
          <router-link class="text-white hover:text-green-300" :to="{ name: 'shopitems' }">
            Shop
          </router-link>
        </li>
        <li>
          <router-link class="text-white hover:text-green-300" :to="{ name: 'bankaccount' }">
            Bank Account
          </router-link>
        </li>
        <li>
          <router-link class="text-white hover:text-green-300" :to="{ name: 'shoplogin' }">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>