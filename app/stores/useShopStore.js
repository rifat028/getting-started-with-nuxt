import { defineStore } from "pinia";
import { ref } from "vue";

export const useShopStore = defineStore(
  "shop",
  () => {
    // 🧠 STATE
    const cart = ref([]);
    const favorites = ref([]);

    // 🔍 GETTERS
    const isInCart = (id) => {
      return cart.value.some((item) => item.id === id);
    };

    const isFavorite = (id) => {
      return favorites.value.some((item) => item.id === id);
    };

    // 🛒 ACTIONS
    const addToCart = (product) => {
      const existing = cart.value.find((i) => i.id === product.id);

      if (existing) {
        existing.quantity++;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    const removeFromCart = (id) => {
      cart.value = cart.value.filter((i) => i.id !== id);
    };

    const increaseQty = (id) => {
      const item = cart.value.find((i) => i.id === id);
      if (item) item.quantity++;
    };

    const decreaseQty = (id) => {
      const item = cart.value.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity--;
    };

    const toggleFavorite = (product) => {
      const exists = favorites.value.find((i) => i.id === product.id);

      if (exists) {
        favorites.value = favorites.value.filter((i) => i.id !== product.id);
      } else {
        favorites.value.push(product);
      }
    };

    return {
      cart,
      favorites,
      isInCart,
      isFavorite,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      toggleFavorite,
    };
  },
  {
    persist: true, // 🔥 THIS MAKES IT PERSIST
  }
);