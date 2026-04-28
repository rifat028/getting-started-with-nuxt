<script setup>
import ProductHeader from "@/components/product/header.vue";
import ProductCard from "~/components/product/card.vue";
import ProductFilter from "@/components/product/filter.vue";
import ProductCardSkeleton from "~/components/product/card-skeleton.vue";

const store = useShopStore();

definePageMeta({
  layout: "ecommerce-layout",
});

// products
const products = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchProducts = async () => {
  loading.value = true;
  try {
    products.value = await $fetch("https://fakestoreapi.com/products");
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);

// filters
const search = ref("");
const filters = reactive({
  minPrice: null,
  maxPrice: null,
  rating: null,
  category: "",
});

const categories = computed(() => {
  return [...new Set(products.value.map((p) => p.category))];
});

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.value.toLowerCase()) &&
      (!filters.minPrice || p.price >= filters.minPrice) &&
      (!filters.maxPrice || p.price <= filters.maxPrice) &&
      (!filters.rating || p.rating.rate >= filters.rating) &&
      (!filters.category || p.category === filters.category)
    );
  });
});
</script>

<template>
  <div class="p-4 bg-linear-to-b from-green-50 to-white md:mx-10">
    <ProductHeader v-model="search" />

    <div class="flex flex-col md:flex-row gap-4 mt-4">
      <div class="md:w-1/4">
        <ProductFilter :categories="categories" v-model:filters="filters" />
      </div>

      <div class="md:w-3/4">
        <div
          v-if="loading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <ProductCardSkeleton v-for="n in 8" :key="n" />
        </div>

        <div v-else-if="error" class="text-red-500">Error loading products</div>

        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          /> 
        </div>
      </div>
    </div>
  </div>
</template>
