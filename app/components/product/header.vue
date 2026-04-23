<script setup>
const model = defineModel();
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Explore Products</h1>
      <p class="text-gray-500 text-sm">Find your perfect item</p>
    </div>

    <div class="relative w-full md:w-80">
      <input
        v-model="model"
        type="text"
        placeholder="Search products..."
        class="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
    </div>
  </div>
</template>
