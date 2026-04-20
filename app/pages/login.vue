<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <nav class="bg-white border-b p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="font-bold text-xl text-blue-600"
          >bd funnel BUILDER</NuxtLink
        >
        <div class="space-x-4">
          <NuxtLink to="/login" class="text-gray-600 hover:text-orange-500"
            >Login</NuxtLink
          >
          <NuxtLink
            to="/register"
            class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >Register</NuxtLink
          >
        </div>
      </div>
    </nav>

    <div class="flex-grow flex items-center justify-center p-6">
      <div
        class="w-full max-auto max-w-md bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
      >
        <div class="text-center mb-6">
          <h2 class="text-blue-900 font-bold text-lg">bd funnel</h2>
          <p class="text-[10px] tracking-[0.2em] uppercase text-gray-500 -mt-1">
            builder
          </p>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>
