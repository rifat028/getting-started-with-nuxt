<script setup>
const props = defineProps({
  item: Object,
});

// ✅ define emits
const emit = defineEmits(["remove", "increase", "decrease"]);
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col md:flex-row gap-4"
  >
    <!-- Image -->
    <div class="w-full md:w-32 h-32 flex items-center justify-center">
      <img :src="item.image" class="h-full object-contain" />
    </div>

    <!-- Info -->
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <h2 class="font-semibold text-gray-800 line-clamp-2">
          {{ item.title }}
        </h2>

        <p class="text-sm text-gray-400 mt-1 capitalize">
          {{ item.category }}
        </p>

        <p class="text-blue-600 font-bold mt-2">${{ item.price }}</p>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-between mt-4">
        <!-- Quantity -->
        <div class="flex items-center border rounded-lg overflow-hidden">
          <button
            @click="emit('decrease', item.id)"
            class="px-3 py-1 hover:bg-gray-100"
          >
            -
          </button>

          <span class="px-4">{{ item.quantity || 1 }}</span>

          <button
            @click="emit('increase', item.id)"
            class="px-3 py-1 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <!-- Remove -->
        <button
          @click="emit('remove', item.id)"
          class="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
