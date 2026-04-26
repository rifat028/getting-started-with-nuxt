<template>
  <div class="flex justify-between items-baseline">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Your Cart</h1>
      <p class="text-gray-500 text-sm">Review your selected items</p>
    </div>
    <div>
      <NuxtLink
        to="/product"
        class="flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        ← Back to shopping
      </NuxtLink>
    </div>
  </div>
</template>
