<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center text-center py-20 px-4">
    <!-- Icon -->
    <div class="text-gray-300 text-7xl mb-6">🛒</div>

    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
      Your cart is empty
    </h2>

    <!-- Subtitle -->
    <p class="text-gray-500 text-sm md:text-base mb-6">
      Looks like you haven't added anything to your cart yet
    </p>

    <!-- Button -->
    <NuxtLink
      to="/product"
      class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
    >
      Browse Products
    </NuxtLink>
  </div>
</template>
