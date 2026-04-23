<script setup>
const props = defineProps({
  items: Array,
});

const subtotal = computed(() => {
  return props.items.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-5 sticky top-6">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>

    <!-- Items -->
    <div class="space-y-3 max-h-60 overflow-y-auto pr-1">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex justify-between text-sm"
      >
        <span class="line-clamp-1">
          {{ item.title }} × {{ item.quantity || 1 }}
        </span>
        <span class="font-medium">
          ${{ (item.price * (item.quantity || 1)).toFixed(2) }}
        </span>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t my-4"></div>

    <!-- Subtotal -->
    <div class="flex justify-between font-semibold text-gray-800">
      <span>Subtotal</span>
      <span>${{ subtotal.toFixed(2) }}</span>
    </div>

    <!-- Checkout -->
    <button
      class="w-full mt-5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
    >
      Proceed to Checkout
    </button>
  </div>
</template>
