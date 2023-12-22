// ProductStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    selectedProduct: null,
    cart: [], // Je lijst met producten in het winkelmandje
  }),
  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId);

      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    resetCart() {
      this.cart = [];
    },
    getCart() {
      return this.cart;
    },
    updateStock(productId, quantity) {
      const selectedProduct = this.selectedProduct;

      if (selectedProduct && selectedProduct.stock !== undefined) {
        // Voeg hier de logica toe om de voorraad bij te werken
        selectedProduct.stock -= quantity;
      } else {
        console.warn('Geen geselecteerd product of voorraad niet gedefinieerd.');
      }
      // Voeg hier andere logica toe afhankelijk van hoe je je voorraad hebt geïmplementeerd
    },
  },
});
