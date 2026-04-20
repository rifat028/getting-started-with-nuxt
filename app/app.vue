<template>
  <div
    class="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800"
  >
    <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
      {{ title }}
    </h2>

    <p class="text-gray-600 dark:text-gray-300">
      {{ content }}
    </p>

    <button
      @click="toggle"
      class="mt-4 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-blue-600 transition"
    >
      {{ expanded ? "Hide" : "Read More" }}
    </button>

    <p v-if="expanded" class="mt-3 text-sm text-gray-500">
      This is extra text shown when you click the button.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "Sample Title",
  },
  content: {
    type: String,
    default: "This is a simple text component using Nuxt and Tailwind.",
  },
});

const expanded = ref(false);

const toggle = () => {
  expanded.value = !expanded.value;
};
</script>
