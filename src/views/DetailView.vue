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

          <!-- Nieuwe sectie voor de melding -->
          <div v-if="addedToCartMessage" class="added-to-cart-message">
            {{ addedToCartMessage }}
          </div>
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
      addedToCartMessage: null,
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
        useProductStore().addToCart({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,
          quantity: this.quantity,
        });
        useProductStore().updateStock(selectedProduct.id, this.quantity);

        // Toon melding aan gebruiker
        this.addedToCartMessage = `${this.quantity} ${selectedProduct.title} is toegevoegd aan het winkelmandje.`;

        // Reset melding na enkele seconden
        setTimeout(() => {
          this.addedToCartMessage = null;
        }, 6000);
      } else {
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

.added-to-cart-message {
  color: green; /* Of gebruik de gewenste kleur voor de melding */
  margin-top: 10px;
}
</style>
