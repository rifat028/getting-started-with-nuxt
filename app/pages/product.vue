<script setup>
import ProductHeader from "@/components/product/header.vue";
import ProductCard from "@/components/product/card.vue";
import ProductFilter from "@/components/product/filter.vue";
import ProductCardSkeleton from "@/components/product/card-skeleton.vue";
import {
  getCart,
  setCart,
  getFavorites,
  setFavorites,
} from "@/utils/navbar/storage";

definePageMeta({
  layout: "ecommerce-layout",
});

// ✅ Cart & Favorites (with localStorage + SSR safety)
const cart = ref(getCart());
const favorites = ref(getFavorites());

// ✅ Products fetching
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

const sync = () => {
  cart.value = getCart();
  favorites.value = getFavorites();
};

// ✅ Run only on client
onMounted(() => {
  fetchProducts();

  window.addEventListener("cart-updated", sync);
  window.addEventListener("favorite-updated", sync);
});

onUnmounted(() => {
  window.removeEventListener("cart-updated", sync);
  window.removeEventListener("favorite-updated", sync);
});

// 🔍 Search & Filters
const search = ref("");
const filters = reactive({
  minPrice: null,
  maxPrice: null,
  rating: null,
  category: "",
});

// 🏷 Extract categories
const categories = computed(() => {
  if (!products.value) return [];
  return [...new Set(products.value.map((p) => p.category))];
});

// 🎯 Filtered products
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

// 🛒 Add to Cart
const addToCart = (product) => {
  const existing = cart.value.find((i) => i.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }

  setCart(cart.value);
};

// ❤️ Toggle Favorite
const toggleFavorite = (product) => {
  const exists = favorites.value.find((i) => i.id === product.id);

  if (exists) {
    favorites.value = favorites.value.filter((i) => i.id !== product.id);
  } else {
    favorites.value.push(product);
  }
  setFavorites(favorites.value);
};
</script>

<template>
  <div class="p-4 bg-linear-to-b from-green-50 to-white md:mx-10">
    <!-- Header -->
    <ProductHeader v-model="search" />

    <div class="flex flex-col md:flex-row gap-4 mt-4">
      <!-- Filter -->
      <div class="md:w-1/4">
        <ProductFilter :categories="categories" v-model:filters="filters" />
      </div>

      <!-- Products -->
      <div class="md:w-3/4">
        <!-- Skeleton Loader -->
        <div
          v-if="loading"
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <ProductCardSkeleton v-for="n in 8" :key="n" />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="text-red-500">Error loading products</div>

        <!-- Products Grid -->
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
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
