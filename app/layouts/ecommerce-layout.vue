<script setup>
import LayoutFooter from "~/components/layout/layoutFooter.vue";

// ✅ Use Pinia store
const store = useShopStore();

const isOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <nav
      class="bg-linear-to-r from-gray-900 to-gray-800 text-white shadow sticky top-0 z-50"
    >
      <div class="mx-auto px-6 md:px-15 py-4 flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <div class="bg-white p-3 rounded-full">
            <img
              src="https://bdfunnelbuilder.com/BFLOGO.png"
              class="w-15 md:w-25"
            />
          </div>
        </NuxtLink>

        <!-- Mobile Toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden text-white text-2xl">
          ☰
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8 text-sm font-medium">
          <NuxtLink to="/" class="text-gray-400 hover:text-white transition relative px-2 py-1" active-class="text-green-400">
            Home
          </NuxtLink>

          <NuxtLink
            to="/product"
            class="text-gray-400 hover:text-white transition relative px-2 py-1"
            active-class="text-green-400"
          >
            Products
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink
            to="/cart"
            class="text-gray-400 hover:text-white transition relative px-2 py-1"
            active-class="text-green-400"
          >
            Cart
            <span
              v-if="store.cart.length"
              class="absolute -top-2 -right-4 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ store.cart.length }}
            </span>
          </NuxtLink>

          <!-- Favorites -->
          <NuxtLink
            to="/favorite"
            class="text-gray-400 hover:text-white transition relative px-2 py-1"
            active-class="text-green-400"
          >
            Favorites
            <span
              v-if="store.favorites.length"
              class="absolute -top-2 -right-4 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ store.favorites.length }}
            </span>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden px-6 pb-6 space-y-4 bg-gray-900 border-t border-gray-700"
      >
        <NuxtLink to="/" @click="isOpen = false" class="block text-gray-300 hover:text-white text-base">
          Home
        </NuxtLink>

        <NuxtLink to="/product" @click="isOpen = false" class="block text-gray-300 hover:text-white text-base">
          Products
        </NuxtLink>

        <NuxtLink
          to="/cart"
          @click="isOpen = false"
          class="block text-gray-300 hover:text-white text-base flex justify-between"
        >
          Cart
          <span v-if="store.cart.length" class="bg-red-500 text-white text-xs px-2 rounded">
            {{ store.cart.length }}
          </span>
        </NuxtLink>

        <NuxtLink
          to="/favorite"
          @click="isOpen = false"
          class="block text-gray-300 hover:text-white text-base flex justify-between"
        >
          Favorites
          <span v-if="store.favorites.length" class="bg-red-500 text-white text-xs px-2 rounded">
            {{ store.favorites.length }}
          </span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Main -->
    <main class="flex-1 bg-linear-to-b from-green-50 to-white p-4">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>
