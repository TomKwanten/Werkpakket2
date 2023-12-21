<template>
  <div>
    <section class="product-details" v-if="product">
      <h2 class="product-title">{{ product.title }}</h2>
      <div class="product-content">
        <img :src="product.image" :alt="product.title" class="product">
        <div class="description">
          <p>{{ product.description }}</p>
          <p class="price">Prijs: {{ product.price }}</p>
          <label for="quantity">Aantal:</label>
          <input v-model="quantity" type="number" id="quantity" min="1" :max="product.stock">
          <button class="add-to-cart" @click="addToCart">Toevoegen aan winkelwagen</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';

export default {
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    product() {
      return useProductStore().selectedProduct;
    },
  },
  methods: {
    addToCart() {
      const selectedProduct = useProductStore().selectedProduct;

      if (selectedProduct && this.quantity > 0 && this.quantity <= selectedProduct.stock) {
        // Voeg product toe aan winkelmandje in de store
        useProductStore().addToCart({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,
          quantity: this.quantity,
        });

        // Pas de voorraadstatus aan in de store
        useProductStore().updateStock(selectedProduct.id, this.quantity);
      } else {
        // Toon een melding dat het product niet aan het winkelmandje kan worden toegevoegd
        console.warn('Kan product niet aan winkelmandje toevoegen. Controleer de voorraad en het aantal.');
      }
    },
  },
};
</script>

<style scoped>
.product-title {
  color: white;
}
</style>
