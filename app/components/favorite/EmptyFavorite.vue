<script setup></script>

<template>
  <div class="flex justify-center items-center py-16 px-4">
    <div
      class="bg-gray-100 rounded-2xl shadow-sm w-full max-w-2xl p-10 text-center"
    >
      <!-- Icon -->
      <div class="text-red-200 text-7xl mb-6">❤️</div>

      <!-- Title -->
      <h2 class="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
        Your favorites are empty
      </h2>

      <!-- Subtitle -->
      <p class="text-gray-500 text-sm md:text-base mb-6">
        You haven't added any products to your favorites yet
      </p>

      <!-- Button -->
      <NuxtLink
        to="/product"
        class="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        Browse Products
      </NuxtLink>
    </div>
  </div>
</template>
