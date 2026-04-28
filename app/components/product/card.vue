<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useShopStore } from "@/stores/useShopStore";

const props = defineProps({
  product: Object,
});

const router = useRouter();
const store = useShopStore();

// 🔗 Navigate to details page
const goToDetails = () => {
  router.push(`/product/${props.product.id}`);
};

// ❤️ Check favorite (from store)
const isFavorite = computed(() => {
  return store.isFavorite(props.product.id);
});

// 🛒 Check cart (from store)
const isInCart = computed(() => {
  return store.isInCart(props.product.id);
});
</script>

<template>
  <div
    @click="goToDetails"
    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
  >
    <!-- IMAGE -->
    <div class="relative overflow-hidden h-60 bg-gray-50">
      <img
        :src="product.image"
        class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
      />

      <!-- Hover overlay -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

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

        <!-- ❤️ Favorite -->
        <button
          @click.stop="store.toggleFavorite(product)"
          class="text-lg transition"
          :class="
            isFavorite ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
          "
        >
          <span v-if="isFavorite">❤️</span>
          <span v-else>🤍</span>
        </button>
      </div>

      <!-- 🛒 Add to Cart -->
      <button
        @click.stop="store.addToCart(product)"
        :disabled="isInCart"
        class="w-full py-3 px-4 font-medium rounded-xl flex items-center justify-center gap-2 transition"
        :class="
          isInCart
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-linear-to-r from-gray-800 to-gray-700 text-white hover:from-green-600 hover:to-green-700'
        "
      >
        {{ isInCart ? "Already in Cart" : "Add to Cart" }}
      </button>
    </div>
  </div>
</template>
