<script setup>
import ProductHeader from "@/components/product/header.vue";
import ProductCard from "@/components/product/card.vue";
import ProductFilter from "@/components/product/filter.vue";

definePageMeta({
  layout: "primary-layout",
});

// Fetch products (SSR)
const {
  data: products,
  pending,
  error,
} = await useFetch("https://fakestoreapi.com/products");

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
    const matchSearch = p.title
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchPrice =
      (!filters.minPrice || p.price >= filters.minPrice) &&
      (!filters.maxPrice || p.price <= filters.maxPrice);

    const matchRating = !filters.rating || p.rating.rate >= filters.rating;

    const matchCategory = !filters.category || p.category === filters.category;

    return matchSearch && matchPrice && matchRating && matchCategory;
  });
});
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
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error loading products</div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
