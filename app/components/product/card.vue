<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
  favorites: Array,
});

const emit = defineEmits(["add-to-cart", "toggle-favorite"]);

const router = useRouter();

// 🔗 Navigate
const goToDetails = () => {
  router.push(`/product-details/${props.product.id}`);
};

// ❤️ Favorite check
const isFavorite = computed(() => {
  return props.favorites?.some((i) => i.id === props.product.id);
});
</script>

<template>
  <div
    @click="goToDetails"
    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
  >
    <!-- IMAGE -->
    <div class="relative overflow-hidden h-60 bg-gray-50">
      <!-- Link wrapper -->
      <div class="block h-full">
        <img
          :src="product.image"
          class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />

        <!-- Hover gradient -->
        <div
          class="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>

      <!-- Discount badge -->
      <div
        class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform"
      >
        25% OFF
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-5">
      <!-- Title + Price -->
      <div class="flex justify-between items-start mb-3">
        <h3
          class="font-bold text-gray-800 hover:text-green-600 transition line-clamp-2 text-sm"
        >
          {{ product.title }}
        </h3>

        <div class="text-right ml-2">
          <p class="text-green-600 font-bold">${{ product.price }}</p>
          <p class="text-xs text-gray-400 line-through">
            ${{ (product.price * 1.3).toFixed(2) }}
          </p>
        </div>
      </div>

      <!-- Rating + Favorite -->
      <div class="flex items-center justify-between mb-4">
        <div class="text-yellow-400 text-sm">★★★★★</div>

        <!-- Favorite -->
        <button
          @click.stop="emit('toggle-favorite', product)"
          class="text-gray-300 hover:text-red-500 transition text-lg"
        >
          <span v-if="isFavorite">❤️</span>
          <span v-else>🤍</span>
        </button>
      </div>

      <!-- Add to Cart -->
      <button
        @click.stop="emit('add-to-cart', product)"
        class="w-full py-3 px-4 bg-linear-to-r from-gray-800 to-gray-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 group overflow-hidden relative"
      >
        <span class="relative z-10 flex items-center gap-2">
          <span class="group-hover:-translate-x-1 transition-transform">
            Add to Cart
          </span>
          <span class="opacity-0 group-hover:opacity-100 transform transition duration-300">
            +
          </span>
        </span>

        <!-- Hover overlay -->
        <span
          class="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-20 transition"
        ></span>
        <span
          class="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        ></span>
      </button>
    </div>
  </div>
</template>
