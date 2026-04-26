<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
    <div
      v-for="i in 4"
      :key="i"
      class="bg-gray-100 rounded-lg h-40 cursor-pointer hover:ring-2 hover:ring-green-400 animate-pulse"
    ></div>
  </div>
</template>
