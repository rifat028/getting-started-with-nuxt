<script setup>
const model = defineModel();
</script>

<template>
  <div
    class="flex flex-col items-center justify-between gap-4 space-y-4 mb-5 md:mb-20"
  >
    <!-- //headline -->
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-2xl md:text-4xl font-bold text-gray-800">
        Explore Products
      </h1>
      <p class="text-gray-500 text-sm">Find your perfect item</p>
    </div>

    <!-- //search box -->
    <div class="relative w-full md:w-180 mx-4">
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
