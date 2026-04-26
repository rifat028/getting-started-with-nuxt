<script setup>
import { getCart, getFavorites } from "@/utils/navbar/storage";
import LayoutFooter from "~/components/layout/layoutFooter.vue";

const cart = ref([]);
const favorites = ref([]);

onMounted(() => {
  const loadData = () => {
    cart.value = getCart();
    favorites.value = getFavorites();
  };

  loadData();

  // 🔥 Listen to updates
  window.addEventListener("cart-updated", loadData);
  window.addEventListener("favorite-updated", loadData);
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <nav
      class="bg-linear-to-r from-gray-900 to-gray-800 text-white shadow sticky top-0 z-50"
    >
      <div class="mx-auto px-6 md:px-15 py-4 flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="relative flex items-center gap-2 group">
          <div class="bg-white p-3 rounded-full flex items-center">
            <img
              src="https://bdfunnelbuilder.com/BFLOGO.png"
              alt="Logo"
              class="w-15 md:w-25"
            />
          </div>
        </a>

        <!-- Navigation -->
        <div
          class="flex items-center gap-8 text-sm font-medium px-4 py-2 transition-colors duration-300"
        >
          <!-- Home -->
          <NuxtLink
            to="/"
            class="relative text-gray-400 hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-300 group"
            active-class="text-green-400"
          >
            Home
            <div
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></div
          ></NuxtLink>

          <!-- Products -->
          <NuxtLink
            to="/product"
            class="relative text-gray-400 hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-300 group"
            active-class="text-green-400"
          >
            Products
            <div
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></div
          ></NuxtLink>

          <!-- Cart -->
          <NuxtLink
            to="/cart"
            class="relative text-gray-400 hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-300 group"
            active-class="text-green-400"
          >
            Cart

            <!-- Badge -->
            <span
              v-if="cart.length"
              class="absolute bottom-2 -right-4 animate-pulse bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cart.length }}
            </span>
            <div
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></div
          ></NuxtLink>

          <!-- Favorites -->
          <NuxtLink
            to="/favorite"
            class="relative text-gray-400 hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-300 group"
            active-class="text-green-400"
          >
            Favorites

            <!-- Badge -->
            <span
              v-if="favorites.length"
              class="absolute bottom-2 -right-4 animate-pulse bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ favorites.length }}
            </span>
            <div
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></div
          ></NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main -->
    <main class="flex-1 bg-linear-to-b from-green-50 to-white p-4">
      <slot />
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>
