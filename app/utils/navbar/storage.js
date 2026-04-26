export const getCart = () => {
  if (!process.client) return []; // 🔥 prevent SSR crash
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const setCart = (cart) => {
  if (!process.client) return;

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
};

export const getFavorites = () => {
  if (!process.client) return [];
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const setFavorites = (favorites) => {
  if (!process.client) return;

  localStorage.setItem("favorites", JSON.stringify(favorites));
  window.dispatchEvent(new Event("favorite-updated"));
};
