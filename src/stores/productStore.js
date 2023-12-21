// ProductStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    selectedProduct: null,
    products: [], // Jouw lijst met producten
    cart: [],     // Jouw winkelwagen
  }),
  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
    getProductById(productId) {
      // Zoek het product op basis van het ID in de lijst van producten
      return this.products.find(product => product.id === productId);
    },
    addToCart(item) {
      this.cart.push(item);
    },
    updateCart(updatedItem) {
      const index = this.cart.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.cart[index] = updatedItem;
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
  },
});
