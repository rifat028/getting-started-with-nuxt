<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm">
      <div
        class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="text-lg font-bold text-blue-600 text-center">
          BD Funnel <br /><span class="text-red-400 font-semibold"
            >Builder</span
          >
        </NuxtLink>

        <!-- Auth Links -->
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/login"
            class="text-gray-600 hover:text-blue-500 transition"
          >
            Login
          </NuxtLink>

          <NuxtLink
            to="/register"
            class="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex items-center justify-center p-4">
      <slot />
    </main>
  </div>
</template>
