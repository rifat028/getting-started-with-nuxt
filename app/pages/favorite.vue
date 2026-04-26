<script setup>
import FavoriteHeader from "@/components/favorite/header.vue";
import FavoriteCard from "@/components/favorite/card.vue";
import {
  getFavorites,
  setFavorites,
  getCart,
  setCart,
} from "@/utils/navbar/storage";
import RecentlyViewed from "~/components/cart/recentlyViewed.vue";
import EmptyFavorite from "~/components/favorite/EmptyFavorite.vue";

definePageMeta({
  layout: "ecommerce-layout",
});

// ✅ State (use utils)
const favorites = ref(getFavorites());

// ✅ Sync function
const sync = () => {
  favorites.value = getFavorites();
};

// ✅ Listen for updates
onMounted(() => {
  window.addEventListener("favorite-updated", sync);
});

onUnmounted(() => {
  window.removeEventListener("favorite-updated", sync);
});

// ✅ Remove from favorites (UPDATED)
const removeFavorite = (id) => {
  favorites.value = favorites.value.filter((i) => i.id !== id);
  setFavorites(favorites.value); // 🔥 important
};

// ✅ Add to cart (UPDATED)
const addToCart = (product) => {
  let cart = getCart();

  const existing = cart.find((i) => i.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  setCart(cart); // 🔥 important
};
</script>

<template>
  <div class="mx-auto p-4 md:p-10">
    <FavoriteHeader />

    <!-- Empty -->
    <div v-if="favorites.length === 0" class="text-center py-20 text-gray-500">
      <EmptyFavorite></EmptyFavorite>
    </div>

    <!-- Items -->
    <div
      v-else
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
    >
      <FavoriteCard
        v-for="item in favorites"
        :key="item.id"
        :item="item"
        @remove="removeFavorite"
        @add-to-cart="addToCart"
      />
    </div>
    <div>
      <div v-if="favorites.length !== 0">
        <h1 class="mt-5 md:mt-15 text-2xl font-bold">
          Recently Viewed Products
        </h1>
        <RecentlyViewed></RecentlyViewed>
      </div>
    </div>
  </div>
</template>
