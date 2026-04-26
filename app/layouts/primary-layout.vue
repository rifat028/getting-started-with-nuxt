<script setup lang="ts">
import LayoutFooter from "~/components/layout/layoutFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm">
      <div
        class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center"
      >
        <!-- Logo -->
        <a href="/" class="text-lg font-bold text-blue-600">
          <img
            src="https://bdfunnelbuilder.com/BFLOGO.png"
            alt="Logo"
            class="w-20 md:w-30"
          />
        </a>

        <!-- Navigation Links -->
        <div class="flex items-center gap-6">
          <!-- Product -->
          <NuxtLink
            to="/product"
            class="text-gray-600 hover:text-blue-500 transition"
          >
            E-commerce
          </NuxtLink>

          <!-- Divider -->
          <div class="hidden md:block w-px h-6 bg-gray-300"></div>

          <!-- Auth Links -->
          <NuxtLink
            to="/login"
            class="text-gray-600 hover:text-blue-500 transition"
          >
            Login
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <slot />
    </main>

    <LayoutFooter></LayoutFooter>
  </div>
</template>
