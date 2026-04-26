<script setup>
const props = defineProps({
  items: Array,
});

// 🧠 Calculations
const subtotal = computed(() => {
  return props.items.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);
});

const shipping = computed(() => {
  return subtotal.value > 0 ? 2 : 0;
});

const tax = computed(() => {
  return subtotal.value * 0.1;
});

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value;
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-md p-6 space-y-4">
    <!-- Title -->
    <h2 class="text-xl font-bold text-gray-800">Order Summary</h2>

    <!-- Subtotal -->
    <div class="flex justify-between text-gray-600">
      <span>Subtotal</span>
      <span class="font-medium text-gray-950">${{ subtotal.toFixed(2) }}</span>
    </div>

    <!-- Shipping -->
    <div class="flex justify-between text-gray-600">
      <span>Shipping</span>
      <span class="font-medium text-gray-950">${{ shipping.toFixed(2) }}</span>
    </div>

    <!-- Tax -->
    <div class="flex justify-between text-gray-600">
      <span>Tax</span>
      <span class="font-medium text-gray-950">${{ tax.toFixed(2) }}</span>
    </div>

    <!-- Divider -->
    <div class="border-t pt-4 mt-8 border-gray-200"></div>

    <!-- Total -->
    <div class="flex justify-between items-center">
      <span class="text-lg font-bold text-gray-900"> Total </span>
      <span class="text-xl font-bold text-green-600">
        ${{ total.toFixed(2) }}
      </span>
    </div>

    <!-- Checkout Button -->
    <button
      class="w-full py-3 mt-3 rounded-xl bg-linear-to-r from-gray-900 to-gray-700 text-white font-medium hover:from-green-600 hover:to-green-700 transition transform shadow-md"
    >
      Proceed to Checkout
    </button>

    <!-- Secure Note -->
    <p
      class="text-center text-sm text-gray-400 flex items-center justify-center gap-2"
    >
      🔒 Secure checkout
    </p>
  </div>
</template>
