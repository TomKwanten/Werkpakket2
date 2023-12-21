// ProductStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    selectedProduct: null,
  }),
  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
  },
});
