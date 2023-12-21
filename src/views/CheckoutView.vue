<template>
    <div>
      <h2>Afrekenen</h2>
      <div v-if="cart.length > 0">
        <h3>Overzicht van uw bestelling</h3>
        <!-- Productoverzicht -->
        <ul>
          <li v-for="item in cart" :key="item.id" class="checkout-item">
            <div class="checkout-item-details">
              <h4>{{ item.title }}</h4>
              <p>Aantal: {{ item.quantity }}</p>
            </div>
            <div class="checkout-item-subtotal">
              <p>Subtotaal: {{ formatCurrency(subtotal(item)) }}</p>
            </div>
          </li>
        </ul>
  
        <!-- Adresgegevens formulier -->
        <h3>Adresgegevens</h3>
        <form @submit.prevent="submitOrder">
          <!-- ... (rest van het formulier blijft hetzelfde) -->
  
          <!-- Checkbox voor verschillende facturatiegegevens -->
          <label for="differentBilling">Facturatiegegevens verschillend:</label>
          <div class="checkbox-wrapper">
            <input type="checkbox" id="differentBilling" v-model="differentBilling" @change="toggleBillingForm">
            <span class="checkbox-label">Verschillend</span>
          </div>
  
          <!-- Facturatiegegevens formulier (wordt alleen weergegeven als differentBilling actief is) -->
          <div v-if="differentBilling">
            <h3>Facturatiegegevens</h3>
            <!-- ... (rest van het formulier blijft hetzelfde) -->
          </div>
  
          <!-- Bestellingsoverzicht -->
          <div class="checkout-total">
            <p>Totale prijs: {{ formatCurrency(totalPrice) }}</p>
            <p>Totale BTW (21%): {{ formatCurrency(totalPrice * 0.21) }}</p>
  
            <!-- Knop "Plaats bestelling" onder totale BTW -->
            <button type="submit">Plaats bestelling</button>
          </div>
        </form>
      </div>
      <p v-else>Winkelmandje is leeg. Voeg producten toe om door te gaan met afrekenen.</p>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  
  export default {
    data() {
      return {
        shippingInfo: {
          name: '',
          address: '',
          city: '',
          postalCode: '',
        },
        differentBilling: false,
        billingInfo: {
          name: '',
          address: '',
          city: '',
          postalCode: '',
        },
      };
    },
    computed: {
      cart() {
        return useProductStore().cart.map(item => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        }));
      },
      totalPrice() {
        return this.cart.reduce((total, item) => total + this.subtotal(item), 0);
      },
    },
    methods: {
      submitOrder() {
        // Plaats hier de logica om de bestelling te verwerken, inclusief de adres- en facturatiegegevens
        console.log('Bestelling geplaatst met adresgegevens:', this.shippingInfo);
        console.log('Facturatiegegevens:', this.billingInfo);
        // Reset het winkelmandje na het plaatsen van de bestelling
        useProductStore().resetCart();
      },
      toggleBillingForm() {
        // Schakel het facturatiegegevens formulier in/uit op basis van de checkbox
        if (!this.differentBilling) {
          this.billingInfo = {
            name: '',
            address: '',
            city: '',
            postalCode: '',
          };
        }
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
  .checkbox-wrapper {
    display: flex;
    align-items: center;
  }
  
  .checkbox-wrapper input {
    margin-right: 8px;
  }
  
  .checkbox-label {
    font-weight: bold;
  }
  
  /* Voeg wat extra ruimte toe onder de totale BTW */
  .checkout-total {
    margin-top: 20px;
  }
  
  /* Voeg wat ruimte toe onder elk product in het overzicht */
  .checkout-item {
    margin-bottom: 10px;
  }
  </style>
  