<script setup>
const props = defineProps({
  item: Object,
});

// ✅ Use store directly
const store = useShopStore();

// ✅ Actions
const removeFavorite = () => {
  store.toggleFavorite(props.item);
};

const addToCart = () => {
  store.addToCart(props.item);
};
</script>

<template>
  <div
    class="group bg-white rounded-2xl shadow-md hover:shadow-xl transition relative"
  >
    <!-- Remove (X button) -->
    <button
      @click.stop="removeFavorite"
      class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 text-gray-500 transition hover:font-bold hover:text-red-500"
    >
      ✕
    </button>

    <!-- Image -->
    <div class="flex justify-center items-center h-40 mb-4 bg-gray-50">
      <img
        :src="item.image"
        class="h-full object-contain transition transform duration-500 hover:scale-105 p-4"
      />
    </div>

    <div class="p-4">
      <!-- Title -->
      <h2 class="text-gray-800 font-medium text-sm mb-2 line-clamp-1">
        {{
          item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title
        }}
      </h2>

      <!-- Bottom Row -->
      <div class="flex items-center justify-between">
        <!-- Price -->
        <span class="text-green-600 font-bold text-lg">
          ${{ item.price }}
        </span>

        <!-- Add to Cart -->
        <button
          @click.stop="addToCart"
          class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm transition hover:bg-green-100"
        >
          <span>+</span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
