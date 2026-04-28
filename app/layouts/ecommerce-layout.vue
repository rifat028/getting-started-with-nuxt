<script setup>
import LayoutFooter from "~/components/layout/layoutFooter.vue";

// ✅ Use Pinia store
const store = useShopStore();
store.loadFromStorage();

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
          <NuxtLink
            to="/"
            class="text-gray-400 hover:text-white transition relative px-2 py-1 group"
            active-class="text-green-400"
          >
            Home
            <span
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></span>
          </NuxtLink>

          <NuxtLink
            to="/product"
            class="text-gray-400 hover:text-white transition relative px-2 py-1 group"
            active-class="text-green-400"
          >
            Products
            <span
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink
            to="/cart"
            class="text-gray-400 hover:text-white transition relative px-2 py-1 group"
            active-class="text-green-400"
          >
            Cart
            <span
              v-if="store.cart.length"
              class="absolute -top-2 -right-4 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold animate-pulse text-white"
            >
              {{ store.cart.length }}
            </span>
            <span
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></span>
          </NuxtLink>

          <!-- Favorites -->
          <NuxtLink
            to="/favorite"
            class="text-gray-400 hover:text-white transition relative px-2 py-1 group"
            active-class="text-green-400"
          >
            Favorites
            <span
              v-if="store.favorites.length"
              class="absolute -top-2 -right-4 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold animate-pulse text-white"
            >
              {{ store.favorites.length }}
            </span>
            <span
              class="absolute bottom-0 left-1/2 w-0 h-0.75 bg-green-500 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"
            ></span>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="md:hidden px-6 pb-6 space-y-4 bg-gray-900 border-t border-gray-700"
      >
        <NuxtLink
          to="/"
          @click="isOpen = false"
          class="block text-gray-300 hover:text-white text-base"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/product"
          @click="isOpen = false"
          class="block text-gray-300 hover:text-white text-base"
        >
          Products
        </NuxtLink>

        <NuxtLink
          to="/cart"
          @click="isOpen = false"
          class="text-gray-300 hover:text-white text-base flex justify-start items-center"
        >
          Cart
          <span
            v-if="store.cart.length"
            class="bg-red-500 text-white text-xs px-2 rounded-full m-2 flex items-center justify-center h-5 w-5"
          >
            {{ store.cart.length }}
          </span>
        </NuxtLink>

        <NuxtLink
          to="/favorite"
          @click="isOpen = false"
          class="text-gray-300 hover:text-white text-base flex justify-start items-center"
        >
          Favorites
          <span
            v-if="store.favorites.length"
            class="bg-red-500 text-white text-xs px-2 rounded-full ml-2 flex items-center justify-center h-5 w-5"
          >
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
