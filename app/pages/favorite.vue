<script setup>
import FavoriteHeader from "@/components/favorite/header.vue";
import FavoriteCard from "@/components/favorite/card.vue";
import RecentlyViewed from "~/components/cart/recentlyViewed.vue";
import EmptyFavorite from "~/components/favorite/EmptyFavorite.vue";

definePageMeta({
  layout: "ecommerce-layout",
});

// ✅ Use Pinia store
const store = useShopStore();

// ✅ Actions
const removeFavorite = (id) => {
  const item = store.favorites.find(i => i.id === id);
  if (item) store.toggleFavorite(item);
};

const addToCart = (product) => {
  store.addToCart(product);
};
</script>

<template>
  <div class="mx-auto p-4 md:p-10">
    <FavoriteHeader />

    <!-- Empty -->
    <div v-if="store.favorites.length === 0">
      <EmptyFavorite />
    </div>

    <!-- Items -->
    <div
      v-else
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
    >
      <FavoriteCard
        v-for="item in store.favorites"
        :key="item.id"
        :item="item"
        @remove="removeFavorite"
        @add-to-cart="addToCart"
      />
    </div>

    <!-- Recently Viewed -->
    <div v-if="store.favorites.length !== 0">
      <h1 class="mt-5 md:mt-15 text-2xl font-bold">
        Recently Viewed Products
      </h1>
      <RecentlyViewed />
    </div>
  </div>
</template>