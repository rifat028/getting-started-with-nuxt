<script setup>
import CartHeader from "@/components/cart/header.vue";
import CartCard from "@/components/cart/card.vue";
import CartSummary from "@/components/cart/summary.vue";

definePageMeta({
  layout: "primary-layout",
});

// ✅ Cart state
const cart = ref([]);

// ✅ Load from localStorage when page loads
onMounted(() => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    cart.value = JSON.parse(saved);
  }
});


// ✅ Remove item
const removeFromCart = (id) => {
  cart.value = cart.value.filter((i) => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart.value));
};


// ✅ Increase quantity
const increaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item) item.quantity++;
  localStorage.setItem("cart", JSON.stringify(cart.value));
};


// ✅ Decrease quantity
const decreaseQty = (id) => {
  const item = cart.value.find((i) => i.id === id);
  if (item && item.quantity > 1) item.quantity--;
  localStorage.setItem("cart", JSON.stringify(cart.value));
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-6">
    
    <CartHeader />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      
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
  </div>
</template>