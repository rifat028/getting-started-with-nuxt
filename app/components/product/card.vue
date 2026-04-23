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
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-4 group"
  >
    <!-- Image -->
    <div class="h-48 flex items-center justify-center mb-4">
      <img
        :src="product.image"
        class="h-full object-contain group-hover:scale-105 transition"
      />
    </div>

    <!-- Info -->
    <h2 class="font-semibold text-gray-800 mb-1">
      {{
        product.title.length > 40
          ? product.title.slice(0, 40) + "..."
          : product.title
      }}
    </h2>

    <p class="text-sm text-gray-500 mb-2 capitalize">
      {{ product.category }}
    </p>

    <div class="flex justify-between items-center mb-3">
      <span class="text-lg font-bold text-blue-600">
        ${{ product.price }}
      </span>

      <span class="text-sm text-yellow-500">
        ⭐ {{ product.rating.rate }}
      </span>
    </div>

    <!-- Actions -->
    <div class="flex justify-between items-center">
      <button
        @click="emit('add-to-cart', product)"
        class="flex-1 mr-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
      >
        Add to Cart
      </button>

      <button
        @click="emit('toggle-favorite', product)"
        class="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-red-50 text-red-500 transition"
      >
        <Icon name="el:heart" />
      </button>
    </div>
  </div>
</template>
