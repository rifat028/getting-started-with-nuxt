<script setup>
const props = defineProps({
  item: Object,
});

// ✅ define emits
const emit = defineEmits(["remove", "add-to-cart"]);
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4 flex flex-col"
  >
    <!-- Image -->
    <div class="h-40 flex items-center justify-center mb-4">
      <img
        :src="item.image"
        class="h-full object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>

    <!-- Title -->
    <h2 class="text-sm font-semibold text-gray-800 line-clamp-2">
      {{ item.title }}
    </h2>

    <!-- Category -->
    <p class="text-xs text-gray-400 mt-1 capitalize">
      {{ item.category }}
    </p>

    <!-- Price -->
    <p class="text-blue-600 font-bold mt-2 text-lg">${{ item.price }}</p>

    <!-- Rating -->
    <p class="text-sm text-yellow-500">⭐ {{ item.rating.rate }}</p>

    <!-- Actions -->
    <div class="flex gap-2 mt-4">
      <!-- ✅ Add to Cart -->
      <button
        @click="emit('add-to-cart', item)"
        class="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>

      <!-- ✅ Remove -->
      <button
        @click="emit('remove', item.id)"
        class="px-3 text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition"
      >
        ✕
      </button>
    </div>
  </div>
</template>
