<script setup>
import FavoriteHeader from "@/components/favorite/header.vue";
import FavoriteCard from "@/components/favorite/card.vue";

definePageMeta({
  layout: "primary-layout",
});

// Dummy data (will replace with store later)
const favorites = ref([]);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <FavoriteHeader />

    <div v-if="favorites.length === 0" class="text-center py-20 text-gray-500">
      ❤️ No favorite items yet
    </div>

    <div
      v-else
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
    >
      <FavoriteCard v-for="item in favorites" :key="item.id" :item="item" />
    </div>
  </div>
</template>
