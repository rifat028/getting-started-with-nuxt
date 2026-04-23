<script setup>
const props = defineProps({
  categories: Array,
});

const filters = defineModel("filters");
</script>

<template>
  <div class="bg-white p-5 rounded-2xl shadow-sm space-y-4">
    <h2 class="text-lg font-semibold text-gray-800">Filters</h2>

    <!-- Price -->
    <div>
      <label class="text-sm text-gray-600">Min Price</label>
      <input
        type="number"
        v-model="filters.minPrice"
        class="w-full mt-1 border rounded-lg px-2 py-1"
      />
    </div>

    <div>
      <label class="text-sm text-gray-600">Max Price</label>
      <input
        type="number"
        v-model="filters.maxPrice"
        class="w-full mt-1 border rounded-lg px-2 py-1"
      />
    </div>

    <!-- Rating -->
    <div>
      <label class="text-sm text-gray-600">Min Rating</label>
      <input
        type="number"
        step="0.1"
        max="5"
        v-model="filters.rating"
        class="w-full mt-1 border rounded-lg px-2 py-1"
      />
    </div>

    <!-- Category -->
    <div>
      <label class="text-sm text-gray-600">Category</label>
      <select
        v-model="filters.category"
        class="w-full mt-1 border rounded-lg px-2 py-1"
      >
        <option value="">All</option>
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
      class="w-full text-sm text-blue-600 mt-2 hover:underline"
    >
      Reset Filters
    </button>
  </div>
</template>
