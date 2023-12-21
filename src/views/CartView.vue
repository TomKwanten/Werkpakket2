<template>
    <div>
      <h2>Winkelmandje</h2>
      <div v-if="cart.length > 0">
        <ul>
          <li v-for="item in cart" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.title" class="cart-item-image">
            <div class="cart-item-details">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <label for="quantity">Aantal:</label>
              <input type="number" v-model="item.quantity" min="1" @change="updateQuantity(item)">
              <button @click="removeFromCart(item)">Verwijderen</button>
            </div>
            <div class="cart-item-subtotal">
              <p>Subtotaal: {{ formatCurrency(subtotal(item)) }}</p>
              <p>BTW (21%): {{ formatCurrency(subtotal(item) * 0.21) }}</p>
            </div>
          </li>
        </ul>
        <div class="cart-total">
          <p>Totale prijs: {{ formatCurrency(totalPrice) }}</p>
          <p>Totale BTW (21%): {{ formatCurrency(totalPrice * 0.21) }}</p>
        </div>
        <button v-if="cart.length > 0" @click="confirmShopping">Bevestigen en afrekenen</button>
      </div>
      <p v-else>Winkelmandje is leeg. Voeg producten toe om door te gaan met afrekenen.</p>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  
  export default {
    computed: {
      cart() {
        return useProductStore().cart.map(item => ({
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
  
  .cart-item-subtotal {
    text-align: right;
  }
  
  .cart-total {
    margin-top: 20px;
  }
  
  /* Voeg eventueel meer stijlen toe voor de weergave van het winkelmandje */
  </style>
  