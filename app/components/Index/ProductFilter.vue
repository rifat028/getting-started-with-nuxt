<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['update-filters'])

const form = reactive({
  search: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 1000
})

function update() {
  emit('update-filters', form)
}
</script>

<template>
  <div class="bg-white p-5 rounded-2xl shadow-md space-y-4">
    <h3 class="text-lg font-semibold text-gray-800">Filters</h3>

    <!-- Search -->
    <input
      v-model="form.search"
      @input="update"
      placeholder="Search..."
      class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
    />

    <!-- Category -->
    <select
      v-model="form.category"
      @change="update"
      class="w-full border rounded-lg px-3 py-2"
    >
      <option value="all">All</option>
      <option value="fashion">Fashion</option>
      <option value="electronics">Electronics</option>
    </select>

    <!-- Price -->
    <div class="flex gap-2">
      <input
        type="number"
        v-model="form.minPrice"
        @input="update"
        placeholder="Min"
        class="w-1/2 border rounded-lg px-3 py-2"
      />

      <input
        type="number"
        v-model="form.maxPrice"
        @input="update"
        placeholder="Max"
        class="w-1/2 border rounded-lg px-3 py-2"
      />
    </div>
  </div>
</template>