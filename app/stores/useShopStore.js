import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useShopStore = defineStore("shop", () => {
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

  // 💾 STORAGE
  const loadFromStorage = () => {
    if (process.client) {
      const savedCart = localStorage.getItem("cart");
      const savedFavorites = localStorage.getItem("favorites");

      cart.value = savedCart ? JSON.parse(savedCart) : [];
      favorites.value = savedFavorites ? JSON.parse(savedFavorites) : [];
    }
  };

  const saveToStorage = () => {
    if (process.client) {
      localStorage.setItem("cart", JSON.stringify(cart.value));
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }
  };

  // 🛒 ACTIONS
  const addToCart = (product) => {
    const existing = cart.value.find((i) => i.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }

    saveToStorage();
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((i) => i.id !== id);
    saveToStorage();
  };

  const increaseQty = (id) => {
    const item = cart.value.find((i) => i.id === id);
    if (item) item.quantity++;
    saveToStorage();
  };

  const decreaseQty = (id) => {
    const item = cart.value.find((i) => i.id === id);
    if (item && item.quantity > 1) item.quantity--;
    saveToStorage();
  };

  const toggleFavorite = (product) => {
    const exists = favorites.value.find((i) => i.id === product.id);

    if (exists) {
      favorites.value = favorites.value.filter((i) => i.id !== product.id);
    } else {
      favorites.value.push(product);
    }

    saveToStorage();
  };

  // 🚀 RETURN EVERYTHING
  return {
    cart,
    favorites,
    isInCart,
    isFavorite,
    loadFromStorage,
    saveToStorage,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    toggleFavorite,
  };
});