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
        <div
          class="flex items-center justify-between py-3 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition text-sm w-full"
        >
          <!-- Left: Title + Quantity -->
          <div class="flex-1 pr-2">
            <span class="block truncate text-gray-700 font-medium">
              {{
                item.title.length > 30
                  ? item.title.slice(0, 30) + "..."
                  : item.title
              }}
            </span>

            <span class="text-xs text-gray-400">
              Qty: {{ item.quantity || 1 }}
            </span>
          </div>

          <!-- Right: Price -->
          <div class="w-20 text-right font-semibold text-gray-800">
            ${{ (item.price * (item.quantity || 1)).toFixed(2) }}
          </div>
        </div>
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
