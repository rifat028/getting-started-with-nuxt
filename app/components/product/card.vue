<script setup>
const props = defineProps({
  product: Object,
  favorites: Array,
});

const emit = defineEmits(["add-to-cart", "toggle-favorite"]);

const isFavorite = computed(() => {
  return props.favorites.some((i) => i.id === props.product.id);
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition group">
    <!-- Image -->
    <div class="h-48 flex items-center justify-center mb-4 p-4">
      <img
        :src="product.image"
        class="h-full object-contain group-hover:scale-105 transition"
      />
    </div>

    <!-- Info -->
    <div class="bg-yellow-50 p-4">
      <h2 class="font-semibold text-gray-800 mb-1">
        {{
          product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title
        }}
      </h2>

      <div class="flex justify-between items-center mb-3">
        <p class="text-sm text-gray-500 capitalize">
          {{ product.category }}
        </p>

        <p class="text-sm text-yellow-500">⭐ {{ product.rating.rate }}</p>
      </div>

      <div class="flex justify-between items-center mb-3">
        <span class="text-lg font-bold text-blue-600">
          ${{ product.price }}
        </span>
        <button
          @click="emit('toggle-favorite', product)"
          class="flex items-center justify-center border rounded-sm hover:bg-red-50 text-red-500 transition px-2"
        >
          <span v-if="isFavorite"><Icon name="el:heart" /></span>
          <span v-else><Icon name="simple-line-icons:heart" /></span>
        </button>
      </div>

      <!-- Actions -->
      <div class="flex justify-between items-center">
        <button
          @click="emit('add-to-cart', product)"
          class="flex-1 mr-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
