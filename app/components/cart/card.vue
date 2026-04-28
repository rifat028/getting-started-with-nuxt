<script setup>
import { useShopStore } from "@/stores/useShopStore";

const props = defineProps({
  item: Object,
});

const store = useShopStore();
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col md:flex-row gap-4"
  >
    <!-- Image -->
    <div
      class="w-full md:w-32 h-32 flex items-center justify-center bg-gray-50 rounded-lg"
    >
      <img
        :src="item.image"
        class="h-full w-full object-contain transition transform hover:scale-105 duration-700"
      />
    </div>

    <!-- Info -->
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h2 class="font-semibold text-gray-800 line-clamp-2">
          {{ item.title }}
        </h2>

        <p class="text-green-600 font-bold text-lg mt-2">
          ${{ item.price }}
          <span class="text-sm text-gray-500 ml-1">
            (${{ item.price }} each)
          </span>
        </p>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-between mt-4">
        <!-- Quantity -->
        <div
          class="flex items-center border border-gray-300 rounded-lg overflow-hidden"
        >
          <button
            @click="store.decreaseQty(item.id)"
            class="px-3 py-1 hover:bg-gray-100 border-r border-gray-300"
          >
            -
          </button>

          <span class="px-4">{{ item.quantity || 1 }}</span>

          <button
            @click="store.increaseQty(item.id)"
            class="px-3 py-1 hover:bg-gray-100 border-l border-gray-300"
          >
            +
          </button>
        </div>

        <!-- Remove -->
        <button
          @click="store.removeFromCart(item.id)"
          class="text-red-500 text-sm px-2 py-1 hover:bg-red-500 hover:text-white hover:scale-105 rounded-xl transition transform duration-300 hover:font-semibold"
        >
          X
        </button>
      </div>
    </div>
  </div>
</template>
