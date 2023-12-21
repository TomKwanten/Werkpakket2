// ProductStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    selectedProduct: null,
    products: [],
    cart: [],
  }),
  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
    getProductById(productId) {
      return this.products.find(product => product.id === productId);
    },
    addToCart(product) {
      this.cart.push(product);
    },
    updateStock(productId, quantity) {
      const productIndex = this.products.findIndex(product => product.id === productId);
      if (productIndex !== -1) {
        this.products[productIndex].stock -= quantity;
      }
    },
  },
});
