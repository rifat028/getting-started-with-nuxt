<script setup>
defineProps({
  cart: Array,
  count: Number,
});
</script>

<template>
  <div class="bg-white p-5 rounded-2xl shadow-md">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">Cart</h3>

    <p class="text-indigo-600 font-bold mb-3">Items: {{ count }}</p>

    <ul class="space-y-2 max-h-40 overflow-auto">
      <li
        v-for="item in cart"
        :key="item.id"
        class="text-sm text-gray-600 border-b pb-1"
      >
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>
