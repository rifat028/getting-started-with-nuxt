<script setup>
import CartHeader from "@/components/cart/header.vue";
import CartCard from "@/components/cart/card.vue";
import CartSummary from "@/components/cart/summary.vue";

definePageMeta({
  layout: "primary-layout",
});

// Dummy cart (we'll replace with Pinia later)
const cart = ref([]);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <CartHeader />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <div v-if="cart.length === 0" class="text-center py-16 text-gray-500">
          🛒 Your cart is empty
        </div>

        <CartCard v-for="item in cart" :key="item.id" :item="item" />
      </div>

      <!-- Summary -->
      <div class="lg:col-span-1">
        <CartSummary :items="cart" />
      </div>
    </div>
  </div>
</template>
