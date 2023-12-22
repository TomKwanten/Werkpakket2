<template>
  <div>
    <section class="product-details" v-if="product">
      <h2 class="product-title">{{ product.title }}</h2>
      <div class="product-content">
        <!-- Afbeelding kan hier niet worden geladen, dezelfde code als in het ProductCardComponent -->
        <img :src="product.image" :alt="product.title" class="product">
        <div class="description">
          <p>{{ product.description }}</p>
          <p class="price">{{ product.prijs }} {{ product.price }}</p>
          <label for="quantity">Aantal:</label>
          <input class="aantal" v-model="quantity" type="number" id="quantity" min="1" :max="product.stock">
          <button class="add-to-cart" @click="addToCart">{{ button }}</button>

          <div v-if="addedToCartMessage" class="added-to-cart-message">
            {{ addedToCartMessage }}
          </div>

          <div v-if="stockErrorMessage" class="stock-error-message">
            {{ stockErrorMessage }}
          </div>

          <div v-if="zeroQuantityMessage" class="zero-quantity-message">
            {{ zeroQuantityMessage }}
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
      stockErrorMessage: null,
      zeroQuantityMessage: null,
      button: "Toevoegen aan winkelwagen",
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

      if (this.quantity === 0) {
        this.zeroQuantityMessage = 'Aantal moet groter zijn dan 0.';
        setTimeout(() => {
          this.zeroQuantityMessage = null;
        }, 6000);
      } else if (selectedProduct && this.quantity > 0 && this.quantity <= selectedProduct.stock) {
        useProductStore().addToCart({
          id: selectedProduct.id,
          title: selectedProduct.title,
          price: selectedProduct.price,
          quantity: this.quantity,
        });
        useProductStore().updateStock(selectedProduct.id, this.quantity);
        this.addedToCartMessage = `${this.quantity} ${selectedProduct.title} is toegevoegd aan het winkelmandje.`;
        setTimeout(() => {
          this.addedToCartMessage = null;
        }, 6000);
      } else {
        this.stockErrorMessage = 'Kan product niet aan winkelmandje toevoegen. Controleer de voorraad en het aantal.';
        setTimeout(() => {
          this.stockErrorMessage = null;
        }, 6000);
      }
    },
  },
};
</script>

<style scoped>
.aantal {
  margin-bottom: 15px;
}
.added-to-cart-message {
  color: green;
  margin-top: 10px;
  border: 4px solid green;
  border-radius: 3px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
}

.stock-error-message {
  color: red;
  margin-top: 10px;
  border: 4px solid red;
  border-radius: 3px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
}

.zero-quantity-message {
  color: orange;
  margin-top: 10px;
  border: 4px solid orange;
  border-radius: 3px;
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
