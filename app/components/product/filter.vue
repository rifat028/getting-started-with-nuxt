<script setup>
const props = defineProps({
  categories: Array,
});

const filters = defineModel("filters");
</script>

<template>
  <div
    class="bg-linear-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md space-y-5 border border-gray-100"
  >
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
      🎛 Filters
    </h2>

    <!-- Price -->
    <div>
      <label class="text-sm font-medium text-gray-600">Min Price</label>
      <input
        type="number"
        v-model="filters.minPrice"
        class="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="$0"
      />
    </div>

    <div>
      <label class="text-sm font-medium text-gray-600">Max Price</label>
      <input
        type="number"
        v-model="filters.maxPrice"
        class="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="$1000"
      />
    </div>

    <!-- Rating -->
    <div>
      <label class="text-sm font-medium text-gray-600">Min Rating</label>
      <input
        type="number"
        step="0.1"
        max="5"
        v-model="filters.rating"
        class="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
        placeholder="⭐ 4.0"
      />
    </div>

    <!-- Category -->
    <div>
      <label class="text-sm font-medium text-gray-600">Category</label>
      <select
        v-model="filters.category"
        class="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition bg-white"
      >
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- Reset -->
    <button
      @click="
        filters.minPrice =
          filters.maxPrice =
          filters.rating =
          filters.category =
            ''
      "
      class="w-full py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition"
    >
      Reset Filters
    </button>
  </div>
</template>
