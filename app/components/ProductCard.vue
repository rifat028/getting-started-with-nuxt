<script setup>
const props = defineProps({
  product: Object,
});

const emit = defineEmits(["add-to-cart"]);

function addToCart() {
  emit("add-to-cart", props.product);
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">
      {{ product.name }}
    </h3>

    <p class="text-gray-500 text-sm mb-1">Category: {{ product.category }}</p>

    <p class="text-xl font-bold text-indigo-600 mb-4">${{ product.price }}</p>

    <button
      @click="addToCart"
      class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Add to Cart
    </button>
  </div>
</template>
