<template>
  <div class="cart-container">
    <h2>Winkelmandje</h2>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="cart-item-image">
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="quantity-controls">
              <label for="quantity">Aantal:</label>
              <input type="number" v-model="item.quantity" min="1" @change="updateQuantity(item)">
              <button @click="removeFromCart(item)" class="remove-button">Verwijderen</button>
            </div>
            <div class="cart-item-subtotal">
              <p>Subtotaal: {{ formatCurrency(subtotal(item)) }}</p>
              <p>BTW (21%): {{ formatCurrency(subtotal(item) * 0.21) }}</p>
            </div>
          </div>
        </li>
      </ul>
      <div class="cart-total">
        <p>Totale prijs: {{ formatCurrency(totalPrice) }}</p>
        <p>Totale BTW (21%): {{ formatCurrency(totalPrice * 0.21) }}</p>
      </div>
      <button v-if="cart.length > 0" @click="confirmShopping" class="confirm-button">Bevestigen en betalen</button>
    </div>
    <p v-else>Winkelmandje is leeg. Voeg producten toe om door te gaan met afrekenen.</p>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  computed: {
    cart() {
      return useProductStore().cart.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        quantity: item.quantity,
        price: item.price,
      }));
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + this.subtotal(item), 0);
    },
  },
  methods: {
    updateQuantity(item) {
      useProductStore().updateCart(item);
    },
    removeFromCart(item) {
      useProductStore().removeFromCart(item.id);
    },
    confirmShopping() {
      console.log('Winkelen bevestigen...');
      // Hier kun je de afhandeling voor het bevestigen van het winkelen toevoegen
      // Bijvoorbeeld, je kunt de gebruiker doorsturen naar de checkoutpagina:
      this.router.push('/checkout');
    },
    subtotal(item) {
      return item.quantity * parseFloat(item.price.replace('€', '').replace(',', '.'));
    },
    formatCurrency(value) {
      return value.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
    },
  },
};
</script>

<style scoped>
/* Stijlen voor de winkelmandpagina */
.cart-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.cart-item {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.cart-item-image {
  max-width: 100px;
  margin-right: 10px;
}

.cart-item-details {
  flex-grow: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.remove-button {
  margin-left: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.cart-item-subtotal {
  text-align: right;
  font-size: 0.9em;
  color: #555;
}

.cart-total {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
}

.confirm-button {
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
