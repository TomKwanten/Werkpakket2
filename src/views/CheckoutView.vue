<template>
  <div class="checkout-container">
    <h2 class="titel">{{ titels.hoofdtitel }}</h2>
    <div class="checkout-item" v-if="cart.length > 0">
      <h3>{{ titels.titel }}</h3>
      <ul class="checkout-items">
        <li class="checkout-item" v-for="item in cart" :key="item.id">
          <div>
            <h4>{{ item.title }}</h4>
            <p>{{ totaal.aantal }} {{ item.quantity }}</p>
          </div>
          <div>
            <p>{{ totaal.totaal }} {{ formatCurrency(subtotal(item)) }}</p>
          </div>
        </li>
      </ul>

      <h3>{{ invoervelden.titel }}</h3>
      <form @submit.prevent="submitOrder">
        <label for="name">{{ invoervelden.naam }}</label>
        <input type="text" id="name" v-model="shippingInfo.name" required>

        <label for="address">{{ invoervelden.adres }}</label>
        <input type="text" id="address" v-model="shippingInfo.address" required>

        <label for="city">{{ invoervelden.stad }}</label>
        <input type="text" id="city" v-model="shippingInfo.city" required>

        <label for="postalCode">{{ invoervelden.postcode }}</label>
        <input type="text" id="postalCode" v-model="shippingInfo.postalCode" required>
        <br>
        <br>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="differentBilling" v-model="differentBilling" @change="toggleBillingForm">
          <span class="checkbox-label">{{ invoervelden.verschil }}</span>
        </div>

        <div v-if="differentBilling">
          <h3>{{ invoervelden.titel2 }}</h3>
          <label for="billingName">{{ invoervelden.naam2 }}</label>
          <input type="text" id="billingName" v-model="billingInfo.name">

          <label for="billingAddress">{{ invoervelden.adres2 }}</label>
          <input type="text" id="billingAddress" v-model="billingInfo.address">

          <label for="billingCity">{{ invoervelden.stad2 }}</label>
          <input type="text" id="billingCity" v-model="billingInfo.city">

          <label for="billingPostalCode">{{ invoervelden.postcode2 }}</label>
          <input type="text" id="billingPostalCode" v-model="billingInfo.postalCode">
        </div>

        <div class="cart-total">
          <p>{{ totaalprijs.prijs }} {{ formatCurrency(totalPrice) }}</p>
          <p>{{ totaalprijs.btw }} {{ formatCurrency(totalPrice * 0.21) }}</p>
          <button type="submit" class="confirm-button">{{ totaalprijs.knop }}</button>
        </div>
      </form>
    </div>
    <p class="leeg" v-else>{{ winkelmandleeg }}</p>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      titels: {
        hoofdtitel: "Afrekenen",
        titel: "Overzicht van uw bestelling",
      },
      totaal: {
        aantal: "Aantal:",
        totaal: "Subtotaal:",
      },
      invoervelden: {
        titel: "Adresgegevens",
        naam: "Naam:",
        adres: "Adres:",
        stad: "stad:",
        postcode: "postcode:",
        verschil: "Verschillend",
        titel2: "Facturatiegegevens",
        naam2: "Naam:",
        adres2: "Adres:",
        stad2: "stad:",
        postcode2: "postcode:",
      },
      totaalprijs: {
        prijs: "Totale prijs:",
        btw: "Totale BTW (21%):",
        knop: "Plaats bestelling",
      },
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
      winkelmandleeg: "Winkelmandje is leeg. Voeg producten toe om door te gaan met afrekenen.",
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
      this.$router.push('/bevestiging');
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
.leeg {
  text-align: center;
}
.titel {
  text-align: center;
}
.checkout-container {
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkbox-wrapper input {
  margin-right: 8px;
  text-align: center;
}

.checkbox-label {
  font-weight: bold;
  text-align: center;
  align-items: center;
}
.cart-total {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
  text-align: center;
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

.checkout-items {
  justify-content: center;
  text-align: center;
  padding: 0;
  width: 100%; 
}

.checkout-item {
  justify-content: center;
  text-align: center;
}
</style>
