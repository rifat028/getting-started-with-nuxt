<script setup>
import CartHeader from "@/components/cart/header.vue";
import CartCard from "@/components/cart/card.vue";
import CartSummary from "@/components/cart/summary.vue";
import { getCart, setCart } from "@/utils/navbar/storage";
import RecentlyViewed from "~/components/cart/recentlyViewed.vue";

definePageMeta({
  layout: "ecommerce-layout",
});

// ✅ State
const cart = ref(getCart());

// ✅ Sync
const sync = () => {
  cart.value = getCart();
};

onMounted(() => {
  window.addEventListener("cart-updated", sync);
});

onUnmounted(() => {
  window.removeEventListener("cart-updated", sync);
});

// ✅ Remove
const removeFromCart = (id) => {
  cart.value = cart.value.filter((i) => i.id !== id);
  setCart(cart.value); // 🔥 important
};

// ✅ Increase
const increaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item) item.quantity++;

  setCart(cart.value); // 🔥 important
};

// ✅ Decrease
const decreaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item && item.quantity > 1) item.quantity--;

  setCart(cart.value); // 🔥 important
};
</script>

<template>
  <div
    class="mx-auto md:mx-5 m-0 px-4 py-6 bg-linear-to-b from-bg-green-50 to-bg-white min-h-screen"
  >
    <CartHeader />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <!-- Empty -->
        <div v-if="cart.length === 0" class="text-center py-16 text-gray-500">
          🛒 Your cart is empty
        </div>

        <!-- Items -->
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
    <div>
      <h1 class="mt-5 md:mt-15 text-2xl font-bold">Recently Viewed Products</h1>
      <RecentlyViewed></RecentlyViewed>
    </div>
  </div>
</template>
