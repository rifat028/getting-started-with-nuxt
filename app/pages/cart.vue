<script setup>
import CartHeader from "@/components/cart/header.vue";
import CartCard from "@/components/cart/card.vue";
import CartSummary from "@/components/cart/summary.vue";
import RecentlyViewed from "~/components/cart/recentlyViewed.vue";
import EmptyCart from "~/components/cart/emptyCart.vue";
import { useShopStore } from "@/stores/useShopStore";

definePageMeta({
  layout: "ecommerce-layout",
});

const store = useShopStore(); // ✅ use Pinia

// direct reactive cart
const cart = computed(() => store.cart);

// actions
const removeFromCart = (id) => {
  store.removeFromCart(id);
};

const increaseQty = (id) => {
  store.increaseQty(id);
};

const decreaseQty = (id) => {
  store.decreaseQty(id);
};
</script>

<template>
  <div
    class="mx-auto md:mx-5 m-0 px-4 py-6 bg-linear-to-b from-bg-green-50 to-bg-white min-h-screen"
  >
    <CartHeader />

    <!-- Empty -->
    <div
      v-if="cart.length === 0"
      class="text-center py-16 text-gray-500 mx-auto"
    >
      <EmptyCart />
    </div>

    <!-- Cart Content -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
      <!-- Items -->
      <div class="lg:col-span-2 space-y-4">
        <CartCard
          v-for="item in cart"
          :key="item.id"
          :item="item"
          @remove="removeFromCart"
          @increase="increaseQty"
          @decrease="decreaseQty"
        />
      </div>

      <!-- Summary -->
      <div class="lg:col-span-1">
        <CartSummary :items="cart" />
      </div>
    </div>

    <!-- Recently Viewed -->
    <div v-if="cart.length !== 0">
      <h1 class="mt-5 md:mt-15 text-2xl font-bold">Recently Viewed Products</h1>
      <RecentlyViewed />
    </div>
  </div>
</template>
