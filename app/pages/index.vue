<script setup>
definePageMeta({
  layout: "primary-layout",
});

import { ref, reactive, computed, watch } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import CartSummary from "@/components/CartSummary.vue";

const products = ref([
  { id: 1, name: "Shoes", price: 50, category: "fashion" },
  { id: 2, name: "Phone", price: 300, category: "electronics" },
  { id: 3, name: "T-shirt", price: 20, category: "fashion" },
  { id: 4, name: "Laptop", price: 800, category: "electronics" },
  { id: 5, name: "Jeans", price: 40, category: "fashion" },
  { id: 6, name: "Headphones", price: 120, category: "electronics" },
  { id: 7, name: "Jacket", price: 90, category: "fashion" },
  { id: 8, name: "Smart Watch", price: 150, category: "electronics" },
  { id: 9, name: "Sneakers", price: 70, category: "fashion" },
  { id: 10, name: "Tablet", price: 250, category: "electronics" },
  { id: 11, name: "Cap", price: 15, category: "fashion" },
  { id: 12, name: "Keyboard", price: 60, category: "electronics" },
  { id: 13, name: "Hoodie", price: 55, category: "fashion" },
  { id: 14, name: "Mouse", price: 30, category: "electronics" },
  { id: 15, name: "Sunglasses", price: 25, category: "fashion" },
  { id: 16, name: "Monitor", price: 200, category: "electronics" },
  { id: 17, name: "Backpack", price: 45, category: "fashion" },
  { id: 18, name: "Camera", price: 500, category: "electronics" },
  { id: 19, name: "Belt", price: 18, category: "fashion" },
  { id: 20, name: "Speaker", price: 110, category: "electronics" },
  { id: 21, name: "Gloves", price: 22, category: "fashion" },
]);

const search = ref("");
const selectedCategory = ref("all");
const cart = ref([]);

const filters = reactive({
  minPrice: 0,
  maxPrice: 1000,
});

const filteredProducts = computed(() => {
  return products.value
    .filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
    .filter(
      (p) =>
        selectedCategory.value === "all" ||
        p.category === selectedCategory.value,
    )
    .filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice);
});

const cartCount = computed(() => cart.value.length);

function handleAddToCart(product) {
  cart.value.push(product);
}

function updateFilters(data) {
  search.value = data.search;
  selectedCategory.value = data.category;
  filters.minPrice = data.minPrice;
  filters.maxPrice = data.maxPrice;
}

watch(search, (val) => {
  console.log("Searching:", val);
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <!-- Header -->
    <div class="max-w-6xl mx-auto mb-6">
      <h1 class="text-3xl font-bold text-gray-800">🛍️ All Products</h1>
      <p class="text-gray-500">Browse and add products to your cart</p>
    </div>

    <!-- Main Grid -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
      <!-- Sidebar -->
      <div class="md:col-span-1 space-y-4">
        <ProductFilter @update-filters="updateFilters" />
        <CartSummary :cart="cart" :count="cartCount" />
      </div>

      <!-- Products -->
      <div class="md:col-span-3">
        <div
          v-if="filteredProducts.length"
          class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProductCard
            v-for="p in filteredProducts"
            :key="p.id"
            :product="p"
            @add-to-cart="handleAddToCart"
          />
        </div>

        <div v-else class="text-center text-gray-500 mt-10">
          No products found 😢
        </div>
      </div>
    </div>
  </div>
</template>
