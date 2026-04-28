<script setup>
import { useRoute } from "vue-router";
import { useShopStore } from "@/stores/useShopStore";

definePageMeta({
  layout: "ecommerce-layout",
});

const store = useShopStore();

const route = useRoute();
const id = route.params.id;

const product = ref(null);
const loading = ref(true);

// fetch product
const fetchProduct = async () => {
  try {
    product.value = await $fetch(`https://fakestoreapi.com/products/${id}`);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchProduct();
});

// ✅ computed state (auto reactive)
const inCart = computed(() =>
  store.cart.some((i) => i.id === product.value?.id),
);

const inFavorite = computed(() =>
  store.favorites.some((i) => i.id === product.value?.id),
);

// 🛒 cart
const addToCart = () => {
  if (!product.value || inCart.value) return;
  store.addToCart(product.value);
};

// ❤️ favorite
const toggleFavorite = () => {
  if (!product.value || inFavorite.value) return;
  store.toggleFavorite(product.value);
};
</script>

<template>
  <div class="min-h-screen bg-linear-to-b from-green-50 to-white p-4 md:p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Back -->
      <NuxtLink
        to="/product"
        class="flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        ← Back to Products
      </NuxtLink>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-20">Loading...</div>

      <!-- CONTENT -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <!-- LEFT: IMAGE -->
        <div>
          <div class="bg-white rounded-xl shadow-md overflow-hidden group">
            <img
              :src="product.image"
              class="w-full h-auto max-h-125 object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-4 gap-3 mt-4">
            <div
              v-for="i in 4"
              :key="i"
              class="bg-gray-100 rounded-lg h-20 cursor-pointer hover:ring-2 hover:ring-green-400 animate-pulse"
            ></div>
          </div>
        </div>

        <!-- RIGHT: DETAILS -->
        <div>
          <!-- Title -->
          <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {{ product.title }}
          </h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <div class="text-yellow-400 text-lg">
              <Icon name="carbon:star-filled" />
              <Icon name="carbon:star-filled" />
              <Icon name="carbon:star-filled" />
              <Icon name="carbon:star-filled" />
              <span class="text-gray-400">
                <Icon name="carbon:star-filled" />
              </span>
            </div>
            <span class="text-gray-500 text-sm">
              ({{ product.rating.count }} reviews)
            </span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-3xl font-bold text-green-600">
              ${{ product.price }}
            </span>
            <span class="text-sm text-gray-500 ml-2"> + Free Shipping </span>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Specs -->
          <div class="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div>
              <p class="text-gray-500">Weight</p>
              <p class="text-gray-800">100g</p>
            </div>
            <div>
              <p class="text-gray-500">Dimensions</p>
              <p class="text-gray-800">10 × 5 × 5 cm</p>
            </div>
            <div>
              <p class="text-gray-500">Material</p>
              <p class="text-gray-800">Premium Quality</p>
            </div>
            <div>
              <p class="text-gray-500">SKU</p>
              <p class="text-gray-800">PRD-{{ product.id }}</p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 mb-8">
            <button
              @click="addToCart"
              :disabled="inCart"
              class="flex-1 py-3 px-6 bg-linear-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md flex items-center justify-center disabled:opacity-50"
            >
              {{ inCart ? "Already in Cart" : "Add to Cart" }}
            </button>

            <button
              @click="toggleFavorite"
              :disabled="inFavorite"
              class="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-500 hover:text-green-600 transition disabled:opacity-50"
            >
              {{ inFavorite ? "Added to Favorites" : "Add to Favorites" }}
            </button>
          </div>

          <!-- Share -->
          <div class="border-t pt-6">
            <h4 class="text-sm text-gray-500 mb-3">Share this product</h4>

            <div class="flex gap-4 text-xl">
              <span class="text-blue-500 cursor-pointer hover:text-blue-300">
                <Icon name="ic:round-facebook" />
              </span>
              <span class="text-pink-500 cursor-pointer hover:text-pink-300">
                <Icon name="tabler:brand-instagram" />
              </span>
              <span class="text-blue-400 cursor-pointer hover:text-blue-200">
                <Icon name="mdi:twitter" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
