<script setup>
import ProductHeader from "@/components/product/header.vue";
import ProductCard from "@/components/product/card.vue";
import ProductFilter from "@/components/product/filter.vue";
import ProductCardSkeleton from "@/components/product/card-skeleton.vue";

definePageMeta({
  layout: "primary-layout",
});

const cart = ref([]);
const favorites = ref([]);

// ✅ Async fetch function
const products = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchProducts = async () => {
  loading.value = true;
  error.value = null;

  try {
    products.value = await $fetch("https://fakestoreapi.com/products");
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
fetchProducts();

// State
const search = ref("");
const filters = reactive({
  minPrice: null,
  maxPrice: null,
  rating: null,
  category: "",
});

// Extract categories
const categories = computed(() => {
  if (!products.value) return [];
  return [...new Set(products.value.map((p) => p.category))];
});

// Filtered products
const filteredProducts = computed(() => {
  if (!products.value) return [];

  return products.value.filter((p) => {
    //search filtering (boolean condition)
    const matchSearch = p.title
      .toLowerCase()
      .includes(search.value.toLowerCase());
    //price filtering (boolean condition)
    const matchPrice =
      (!filters.minPrice || p.price >= filters.minPrice) &&
      (!filters.maxPrice || p.price <= filters.maxPrice);
    //rating filtering (boolean condition)
    const matchRating = !filters.rating || p.rating.rate >= filters.rating;
    //category filtering (boolean condition)
    const matchCategory = !filters.category || p.category === filters.category;

    return matchSearch && matchPrice && matchRating && matchCategory;
  });
});

//add to cart
const addToCart = (product) => {
  const existing = cart.value.find((i) => i.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

//add to favorite
const toggleFavorite = (product) => {
  const exists = favorites.value.find((i) => i.id === product.id);

  if (exists) {
    favorites.value = favorites.value.filter((i) => i.id !== product.id);
  } else {
    favorites.value.push(product);
  }
};
</script>

<template>
  <div class="p-4">
    <!-- Header -->
    <ProductHeader v-model="search" />

    <div class="flex flex-col md:flex-row gap-4 mt-4">
      <!-- Filter -->
      <div class="md:w-1/4">
        <ProductFilter :categories="categories" v-model:filters="filters" />
      </div>

      <!-- Products -->
      <div class="md:w-3/4">
        <div
          v-if="loading"
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <ProductCardSkeleton v-for="n in 8" :key="n" />
        </div>

        <div v-else-if="error">Error loading products</div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            :favorites="favorites"
            @add-to-cart="addToCart"
            @toggle-favorite="toggleFavorite"
          />
        </div>
      </div>
    </div>
  </div>
</template>
