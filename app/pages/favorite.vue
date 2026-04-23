<script setup>
import FavoriteHeader from "@/components/favorite/header.vue";
import FavoriteCard from "@/components/favorite/card.vue";

definePageMeta({
  layout: "primary-layout",
});

// ✅ Favorites state
const favorites = ref([]);

// ✅ Load from localStorage
onMounted(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    favorites.value = JSON.parse(saved);
  }
});

// ✅ Remove from favorites
const removeFavorite = (id) => {
  favorites.value = favorites.value.filter((i) => i.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites.value));
};

// ✅ Add to cart (optional but useful)
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((i) => i.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <FavoriteHeader />

    <!-- Empty -->
    <div v-if="favorites.length === 0" class="text-center py-20 text-gray-500">
      ❤️ No favorite items yet
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
  </div>
</template>
